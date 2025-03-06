import React from "react";
import UserList from "./UserList"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    fetch("/users.json")
    .then((response)=>response.json())
    .then((data)=>this.setState({users:data}))
    .catch((error)=>console.error("Error fetching users:",error))


  }

  render(){
    return (
      <div>
        <h1>User List</h1>
        <UserList users={this.state.users} />

      </div>
    )
  }
}

export default App