import React from "react";
import { Redirect } from "react-router-dom";

const Login = props => {
  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default Login;
