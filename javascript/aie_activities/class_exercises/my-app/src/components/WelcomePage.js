import React, { Component } from "react";
import Conditional from "./Conditional";
import Navigation from "./Navigation";

class WelcomePage extends Component {
  state = {
    greeting: 'Hello world!',
    name: '',
    surname: '',
    login: true,
    buttLabel: 'Greet'
  };

  changeGreeting = () => {
    if (this.state.greeting === 'Hello world!') {
      this.setState({ greeting: 'I have been clicked!' });
    } else {
      this.setState({ greeting: 'Hello world!' });
    }
    
  }

  updateUser = () => {
    this.setState({ name: document.getElementById('field1').value });
    this.setState({ surname: document.getElementById('field2').value });
  }
  changeUser = () => {
    this.setState({ name: document.getElementById('field1').value +'*' });
    this.setState({ surname: document.getElementById('field2').value +'*' });
  }

  handleClick = () => {
    this.state.display? this.setState({display: false }):this.setState({display: true });
    
    if(this.state.buttLabel==='Greet'){
      this.setState({buttLabel: 'Dont Greet'});
    }
    else if(this.state.buttLabel==='Dont Greet'){
      this.setState({buttLabel: 'Greet'});
    }
  }


  render() {

    return (
      <div className="mainSection">
        <h1 className="greet">{this.state.greeting}</h1>
        <button onClick={this.changeGreeting}>Click Me!</button>
        <br></br>

        <form name="myForm" action="" method="post">
          <label htmlFor="field1">Field 1:</label><br></br>
          <input onChange={this.updateUser} type="text" id="field1" name="field1" /><br></br>
          <label htmlFor="field2">Field 2:</label><br></br>
          <input onChange={this.updateUser} type="text" id="field2" name="field2" /><br></br>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        <br></br>

        <button onClick={ this.handleClick}>{this.state.buttLabel}</button>

        <br></br>
        
        <h3>Hello {this.state.name} {this.state.surname}</h3>
        <p id="target"></p>

        {this.state.display ? <Conditional name={this.state.name} surname={this.state.surname} isLoggedIn={this.state.login} />: <></> }
        
      </div>
    );
  }
}

export default WelcomePage;
