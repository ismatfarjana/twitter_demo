// 766259957135-u0b2psusufrrv0uh7tajsc6fkdorh3l8.apps.googleusercontent.com
//added google api library in index.html as script
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
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
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); //update the component state when user is signed in
          //not using the componenet state any more so...updating the auth state in redux store like below
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); //adding event listener with a call back function to it
        });
    });
  }

  //call back function for event listener
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    //helper method to print if user loggedin or not
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="google-button">
          Google Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="google-button">
          Google Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
