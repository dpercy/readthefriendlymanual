import React from 'react';
import { GoogleRedirectCredential, } from "mongodb-stitch-browser-sdk";
import { StitchClient, GoogleCredentials } from "./credentials";


class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate() {
    // debugger;
    const cred = new GoogleRedirectCredential;
    cred.providerCapabilities = {};
    StitchClient.auth.loginWithCredential(cred);
  }

  render() {
    return (<div>
        <h1>Welcome</h1>
        <button onClick={this.authenticate}>Login</button>
      </div>
    )
  }
}
export default LoginPage;
