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



// import { useState,useEffect } from "react";
// function App(){
//   const [count,setCount] =useState(1)
//   const [name,setName]=useState('Manu')
//   useEffect(()=>{
//     console.log('rendered')
//   },[count])
//   const handleChange=()=>{
//     setCount(count+1)
//   }
//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleChange}>Incriment</button>
//       <h1>{name}</h1>
//       <button onClick={()=>setName('Shino')}>Change Name</button>
//     </>
//   )
// }

// export default App



// import { useState,useEffect } from "react";
// function App(){
//   const [count,setCount] =useState(0)
//   const [running,setRunning]=useState(false)
//   useEffect(()=>{
//     if(!running) return
//     const interval=setInterval(()=>{
//       setCount((prevCount)=>prevCount+1)
//     },1000)
//     return ()=>{
//       clearInterval(interval)
//       console.log('cleanup:Interval Cleared!')
//     }
//   },[running])
//   return(
//     <>
//       <h1>Timer:{count}</h1>
//       <button onClick={()=>setRunning(true)}>Start</button>
//       <button onClick={()=>setRunning(false)}>Stop</button>
//     </>
//   )
// }

// export default App




// import { useEffect,useRef } from "react";

// function App(){
//   const myRef=useRef(null)


//   useEffect(()=>{
//     console.log(myRef.current)
//   },[])

//   const handleSubmit=(event)=>{
//     event.preventDefault()
//     console.log(myRef.current.value)
//   }
//   return(
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" ref={myRef} placeholder="Focus Me !!" />
//         <input type="submit" value="submit" />
//       </form>
//     </>
//   )
// }

// export default App



// import { useEffect,useRef } from "react";

// function App(){
//   const myRef=useRef(null)


//   useEffect(()=>{
//     console.log(myRef.current)
//   },[])

//   const handleSubmit=(event)=>{
//     // event.preventDefault()
//     console.log(myRef.current.value)
//   }
//   return(
//     <>
     
//         <input type="text" ref={myRef} placeholder="Focus Me !!" onChange={handleSubmit} />
//     </>
//   )
// }

// export default App



// import React,{useContext} from "react";
// const myContext=React.createContext()
// function App(){
//   const value='Helo from context'

//   return(
//     <myContext.Provider value={value}>
//       <ChildComponent/>
//     </myContext.Provider>
//   )
// }


// function ChildComponent(){
//   const contextValue=useContext(myContext)
//   return(
//     <>
//       {contextValue}
//     </>
//   )
// }


// export default App




import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      {theme} mode
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App;
