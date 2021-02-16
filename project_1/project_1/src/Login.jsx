import React, { useState } from 'react';

function GetLoginButton({onLogin}){

const [currentuser, setCurrentUser] = useState('');
const [disabled, setDisabled] = useState(true);

 return (
  <div className="user-authentication">
  <h1>Login</h1>
   <input className="do-login" type="text" name="username" placeholder="username" autoFocus="autofocus" onChange={ (e) => {
    setCurrentUser(e.target.value);
    if (currentuser){
      setDisabled(false);
    }
    }}
   value={currentuser}/>
   <button className="login-button"  onClick={ (e) => {
    onLogin(currentuser);
    setCurrentUser('');
    setDisabled(true);
   }}
   disabled={disabled}
   >Login</button>
   </div>
  
 );

};


export default GetLoginButton;