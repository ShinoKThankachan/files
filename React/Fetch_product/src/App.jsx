// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import Product from './components/Products'
// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/products/:id" element={<Product/>}/>
//                 </Routes>
//             </BrowserRouter>
        
//         </div>
//     )
// }

// export default App



import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handlePost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            UserId:1,
            title:'My home',
            body:'My home is very beautiful'
        })
        .then(res => {
            console.log(res)
        
        const newPost={
            ...res.data,id:Math.max(...posts.map(post=>post.id))+1
        }
        setPosts([newPost,...posts])
    })
    .catch(err => {
        console.log(err)
    })}

    const handleUpdate = (postIdforUpdate) => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            UserId:1,
            title:'PUT',
            body:'Updated'
        })
        .then(res => {
            console.log(res.data)
            const updatedPost = posts.map((post) => 
                post.id === postIdforUpdate ? res.data : post
            )
            setPosts(updatedPost)
            console.log(updatedPost)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const handlePatch = (postIdforUpdate) => {
        axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
            title:'PATCH'
        })
        .then(res => {
            console.log(res.data)
            const updatedPost = posts.map((post) => 
                post.id === postIdforUpdate ? res.data : post
            )
            setPosts(updatedPost)
            console.log(updatedPost)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const handleDelete = async(postIdforDelete) => {
        try{
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postIdforDelete}`)
            console.log(res)
            setPosts(posts.filter(post => post.id !== postIdforDelete))
        }
        catch(err){
            console.log(err)
        }
       
    }
    return (
            <>
            <button onClick={handlePost}>Click to add a defualt data</button>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                    <dl>
                        <dt>{post.title}</dt>
                        <dd>{post.body}</dd>
                    </dl>
                    <button onClick={()=>handleUpdate(post.id)}>Click to update default value</button>
                    <button onClick={()=>handlePatch(post.id)}>Click to patch default value</button>
                    <button onClick={()=>handleDelete(post.id)}>Click to delete default value</button>
                    </li>
                    ))}
            </ul>
            
            </>
    )


}

export default App
