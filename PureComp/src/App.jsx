import React from "react";


class App extends React.PureComponent{
  constructor(){
    super()
    this.state={
      name:'Manu'
    }
  }

  handleChange=()=>{
  this.setState({
    name:'Abhi'
  })
  }
  render(){
  console.log('component Rendered')
  return(
    <>
      <p>name is {this.state.name}</p>
      <button onClick={this.handleChange}>Change Name</button>
    </>
  )
  }
}
export default App