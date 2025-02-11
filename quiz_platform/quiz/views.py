from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from .models import QuizCategory, DifficultyLevel, Question, Score, UserProfile, Feedback
from .forms import RegisterForm, FeedbackForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            send_mail(
                'Welcome to Quiz Platform!',
                'Thank you for registering. Start taking quizzes now!',
                'no-reply@quizplatform.com',
                [user.email],
                fail_silently=False,
            )
            return redirect('home')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home') 
            else:
                messages.error(request, 'Invalid username or password')
        else:
            messages.error(request, 'Invalid form submission')
    else:
        form = AuthenticationForm()

    return render(request, 'login.html', {'form': form})


@login_required
def profile(request):
    user_profile = UserProfile.objects.get(user=request.user)
    scores = Score.objects.filter(user=request.user)
    return render(request, 'profile.html', {'user_profile': user_profile, 'scores': scores})

@login_required
def quiz_home(request):
    return render(request,'quiz_home.html')

def quiz(request, category_id, difficulty_id):
    category = QuizCategory.objects.get(id=category_id)
    difficulty = DifficultyLevel.objects.get(id=difficulty_id)
    questions = Question.objects.filter(category=category, difficulty=difficulty)

    if request.method == 'POST':
        
        answers = request.POST.getlist('answers')
        score = calculate_score(questions, answers)
        Score.objects.create(user=request.user, category=category, difficulty=difficulty, score=score)

      
        send_mail(
            'Your Quiz Results',
            f'You scored {score} points on the {category.name} {difficulty.name} quiz.',
            'no-reply@quizplatform.com',
            [request.user.email],
            fail_silently=False,
        )
        return redirect('results', score=score)

    return render(request, 'quiz.html', {'category': category, 'difficulty': difficulty, 'questions': questions})


def calculate_score(questions, answers):
    score = 0
    for question, user_answer in zip(questions, answers):
        if int(user_answer) == question.correct_option:
            score += 1
    return score


@login_required
def feedback(request):
    if request.method == 'POST':
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.instance.user = request.user
            form.save()
            return redirect('home')
    else:
        form = FeedbackForm()
    return render(request, 'feedback.html', {'form': form})


def top_scorers(request):
    categories = QuizCategory.objects.all()
    top_scores = {}

    for category in categories:
        top_scores[category.name] = {
            'easy': Score.objects.filter(category=category, difficulty__name='easy').order_by('-score')[:10],
            'medium': Score.objects.filter(category=category, difficulty__name='medium').order_by('-score')[:10],
            'hard': Score.objects.filter(category=category, difficulty__name='hard').order_by('-score')[:10],
        }

    return render(request, 'top_scorers.html', {'top_scores': top_scores})
def home(request):
    return render(request, 'home.html')
