import React from 'react';
import {Route, Redirect} from 'react-router-dom';

let Auth = ({ctrueComponent, falseComponent, authFn, ...rest}) =>
    <Route
      {...rest}
      render={authFn() ? trueComponent : falseComponent}  
    />

export default Auth;