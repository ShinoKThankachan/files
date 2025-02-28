import { Component } from "react";
import './App.css'
class App extends Component{
  constructor(){
    super()
    this.state={
      count:0,
  }
}

handleChange = () => {
  this.setState((prevState) => ({
    count:prevState.count + 1,
  }))
}
  render(){
    return(
      <>
      <nav>
          <ul className="nav">
            <li>Home</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="main">
      <h1 className="heading">{this.state.count}</h1>
      <button onClick={this.handleChange}>ClickMe</button>
      </div>
      </>
    )
  }
}
export default App
