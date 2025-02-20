function submitForm() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    if (!name||!email||!phone) {
        alert("Please fill out all fields.");
        return;
    }

    document.getElementById("dispName").value=name;
    document.getElementById("dispEmail").value=email;
    document.getElementById("dispPhone").value=phone;
    document.getElementById("displaySection").classList.remove("hidden");
}
function editForm() {
    let editBtn=document.getElementById("editBtn");
    let isEditing=editBtn.innerText==="Save";
    document.getElementById("dispName").disabled=isEditing;
    document.getElementById("dispEmail").disabled=isEditing;
    document.getElementById("dispPhone").disabled=isEditing;
    editBtn.innerText=isEditing?"Edit":"Save";
}
function deleteForm() {
    document.getElementById("displaySection").classList.add("hidden");
    document.getElementById("dispName").value="";
    document.getElementById("dispEmail").value="";
    document.getElementById("dispPhone").value="";
}