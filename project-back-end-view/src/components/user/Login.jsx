import React from 'react';

let Login = props =>
  <div>
    <input type="text" ref="username" placeholder="Username"/>
    <input type="password" ref="password" placeholder="Password"/>
    <input type="submit" value="Login"/>  
  </div>

export default Login;