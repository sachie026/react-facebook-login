import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
  console.log(response);
}
function App() {
  return (
    <div className="App">
      <FacebookLogin
    appId="1406292176188894"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} />,
    </div>
  );
}

export default App;
