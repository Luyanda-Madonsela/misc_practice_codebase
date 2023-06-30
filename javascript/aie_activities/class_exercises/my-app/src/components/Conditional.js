import React, { Component } from 'react'

class Conditional extends Component {
state = {
    name:'',
    surname:'',
    isLoggedIn:false,
    }

  render() {

    if (this.props.isLoggedIn===true){
        return (
            <div>Success! Hello {this.props.name} {this.props.surname},I am a Conditional Render.</div>
        )

    }

    else {
        return (
            <div>You are not logged in yet</div>
        )
        
    }

    <button>Log in</button>

  }
}

export default Conditional;