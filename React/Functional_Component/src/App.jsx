// function App(){
//   return(
//     <>
//         <h1>Hello</h1>
//     </>
//   )
// }
// export default App


// const App=()=><><h1>Hello</h1></>
// export default App


// import { useState } from "react";

// function App(){
//   const [name,setName]=useState('Manu')
//   const handleChange=()=>{
//     setName('Shino')
//   }
//   return(
//     <>
//       <h1>{name}</h1>
//       <button onClick={handleChange}>Change Name</button>
//     </>
//   )
// }
// export default App


// import { useState } from "react";

// function App(){
//   const [name,setName]=useState('Manu')
//   return(
//     <>
//       <h1>{name}</h1>
//       <button onClick={()=>setName('Shino')}>Change Name</button>
//     </>
//   )
// }
// export default App


// import { useState } from "react";
// function App(){
//   const [count,setCount] =useState(1)
//   const handleChange=()=>{
//     setCount(count+1)
//   }
//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleChange}>Incriment</button>
//     </>
//   )
// }

// export default App


// import { useState,useEffect } from "react";
// function App(){
//   const [count,setCount] =useState(1)
//   useEffect(()=>{
//     console.log('rendered')
//   },)
//   const handleChange=()=>{
//     setCount(count+1)
//   }
//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleChange}>Incriment</button>
//     </>
//   )
// }

// export default App



// import { useState,useEffect } from "react";
// function App(){
//   const [count,setCount] =useState(1)
//   useEffect(()=>{
//     console.log('rendered')
//   },[])
//   const handleChange=()=>{
//     setCount(count+1)
//   }
//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleChange}>Incriment</button>
//     </>
//   )
// }

// export default App



import { useState,useEffect } from "react";
function App(){
  const [count,setCount] =useState(1)
  const [name,setName]=useState('Manu')
  useEffect(()=>{
    console.log('rendered')
  },[count])
  const handleChange=()=>{
    setCount(count+1)
  }
  return(
    <>
      <h1>{count}</h1>
      <button onClick={handleChange}>Incriment</button>
      <h1>{name}</h1>
      <button onClick={()=>setName('Shino')}>Change Name</button>
    </>
  )
}

export default App