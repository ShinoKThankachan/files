// import React from "react";

// class App extends React.PureComponent{
//   constructor(){
//     super()
//     this.state={
//       name:'Manu'
//     }
//     console.log('component created')
//   }
//   handleChange=()=>{
//     this.setState({
//       name:'Abhi'
//     })
//   }
//   componentDidMount(){
//     console.log('component mounted')
//   }
//   render(){
//     console.log('component Renderd')
//     return(
//       <>
//       <p>name is {this.state.name}</p>
//       <button onClick={this.handleChange}>Change Name</button>
//       </>
//     )
//   }
// }
// export default App

// import React from "react";

// class App extends React.PureComponent{
//   constructor(){
//     super()
//     this.state={
//       count:1
//     }
//     console.log('component created')
//   }
//   handleChange=()=>{
//     this.setState({
//       count:this.state.count+1
//     })
//   }
//   componentDidUpdate(prevProps,prevState){
//     console.log(`changes from ${prevState.count} to ${this.state.count}`)
//   }
//   render(){
//     console.log('component Renderd')
//     return(
//       <>
//       <p>Count: {this.state.count}</p>
//       <button onClick={this.handleChange}>Increment</button>
//       </>
//     )
//   }
// }
// export default App



import React from "react";


class Message extends React.Component {
  componentWillUnmount(){
    console.log("Message component is being removed!")
  }

  render(){
    return <p>Hello, I am here!</p>
  }
}

class App extends React.Component{
  state={show:true};


  toggleMessage=()=>{
    this.setState({show:!this.state.show})
  }


  render(){
    return (
      <>
        <button onClick={this.toggleMessage}>
          {this.state.show ? "Remove Message" : "show Message"}
        </button>
        {this.state.show && <Message/>}
      </>
    )
  }
}

export default App