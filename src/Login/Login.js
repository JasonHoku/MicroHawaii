import React, { useState } from 'react';
import { Button } from "reactstrap";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const providersNames = [
  'google',
];

const Loginbutton = (props) =>


 <div  className="app-header-right" style={{
    marginTop: 36,
    alignContent: "center",
}}>   &nbsp;
<a href={`${backendUrl}/connect/${props.providerName}`} >
<Button
                  className="btn-icon-horizontal btn-transition app-header-right"
                  outline
                  color="dark"
                >
                  <i className="fa fa-home btn-icon-wrapper"></i>&nbsp;
                  Login
                </Button>
  </a> </div> ;

const Logoutbutton = (props) => <Button onClick={props.onClick}>Logout</Button>;

const LoginAct = (props) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('jwt'));

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
    setIsLogged(false);
  };

  let buttons;

  if (isLogged) {
    buttons = <Logoutbutton onClick={logout} />;
  } else {
    buttons = <ul style={{ listStyleType: 'none' }}>
      {providersNames.map((providerName, i) => <li key={providerName}>
        <Loginbutton providerName={providerName}/>
        </li>)}
    </ul>;
  }

  let text;

  if (isLogged) {
    text = `Welcome ${localStorage.getItem('username')}, you are connected!`;

if (isLogged && (localStorage.getItem('username') == "jlevien808")) {

  
  text = `Sup ${localStorage.getItem('username')}, you are connected!`;

  

}
  
  } else {
    text =[  

      <div  className="app-header-right" style={{
         top: "-20px",
         marginTop: 20,
         alignContent: "center",
     }}> 
     <a href={`${backendUrl}/connect/google`} ><Button
    className="btn-icon-horizontal btn-transition app-header-right"
    outline
    color="dark"
  >
    <i className="fa fa-newspaper-o btn-icon-wrapper"></i>&nbsp;
     Sign-Up
  </Button></a>
  </div>]
  }

  return <span className="app-header-right">
    {text}
              
    {buttons}
  </span>;
}

export default LoginAct;
