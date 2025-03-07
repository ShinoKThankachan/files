import React,{ Component } from "react";

class App extends Component{
  constructor(){
    super()
    this.inputRef=React.createRef()
  }
  handleChange=(event)=>{
    event.preventDefault()
    alert('inputValue:'+this.inputRef.current.value)
  }

  render(){
    return(
      <>
          <form action="" onSubmit={this.handleChange}>
          <input type="text" name="" id="" ref={this.inputRef}/>
          <input type="submit" value="Submit" />
          </form>
          {/* <p>you typed:{this.state.text}</p> */}
      </>
    )
  }
}

export default App

