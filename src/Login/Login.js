import React, { useState } from "react";
import { Button } from "reactstrap";

const Loginbutton = (props) => (
  <div
    className="app-header-right"
    style={{
      alignContent: "center",
    }}
  >
    <a href={`/account`}>
      <Button
        className="btn-icon-horizontal btn-transition app-header-right"
        outline
        color="dark"
      >
        <i
          className="pe-7s-home"
          style={{
            fontSize: "20px",
            alignContent: "center",
          }}
        ></i>
        &nbsp;Account
      </Button>
    </a>
  </div>
);

const Logoutbutton = (props) => (
  <Button
    style={{
      alignContent: "center",
    }}
    onClick={props.onClick}
  >
    Logout
  </Button>
);

const LoginAct = (props) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("jwt"));

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    setIsLogged(false);
    window.location.reload();
  };

  let buttons;

  if (isLogged) {
    buttons = <Logoutbutton onClick={logout} />;
  } else {
    buttons = <Loginbutton />;
  }

  let text;

  if (isLogged) {
    text = `${localStorage.getItem("username")}`;
  }

  return <div className="app-header-right">{buttons}</div>;
};

export default LoginAct;
