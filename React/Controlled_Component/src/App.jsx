import { Component } from "react";

class App extends Component{
  constructor(){
    super()
    this.state={
      text:''
    }
  }
  handleChange=(event)=>{
    this.setState({text:event.target.value})
  }

  render(){
    return(
      <>
          <input type="text" name="" id="" value={this.state.text} onChange={this.handleChange}/>
          <p>you typed:{this.state.text}</p>
      </>
    )
  }
}

export default App
