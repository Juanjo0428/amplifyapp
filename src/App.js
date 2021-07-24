import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
        <h1>We now have Auth!</h1>
=======
        <h1>Hello from V2</h1>
>>>>>>> e754603c07a0108a4ebab505a7a080daf5fd4795
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
