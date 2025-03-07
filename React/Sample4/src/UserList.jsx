import React from "react";

class UserList extends React.Component{
    render(){
        return (
            <div className="main">
                {this.props.users.length>0?(
                    <ul>
                        {this.props.users.map((user)=>(
                            <li key={user.id}>
                                <p id="p1">.</p><br /><br />
                                <p><strong>Name:{user.name}</strong></p>
                                <p>Email:{user.email}</p>
                                <p>Address:{user.address.city}</p>
                            </li>
                            
                        ))}
                    </ul>
                ):(
                    <p>Loading users.....</p>
                    
                )}
            </div>
        )
    }
}

export default UserList