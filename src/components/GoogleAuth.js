// 766259957135-u0b2psusufrrv0uh7tajsc6fkdorh3l8.apps.googleusercontent.com
//added google api library in index.html as script
import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // load the lib
      window.gapi.client
        .init({
          // initialize object
          clientId:
            "766259957135-u0b2psusufrrv0uh7tajsc6fkdorh3l8.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          //refferns to the librery
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); //update the component state when user is signed in
          this.auth.isSignedIn.listen(this.onAuthChange); //adding event listener with a call back function to it
        });
    });
  }

  //call back function for event listener
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    //helper method to print if user loggedin or not
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="google-button">
          G Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="google-button">
          G Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton}</div>
      </div>
    );
  }
}

export default GoogleAuth;
