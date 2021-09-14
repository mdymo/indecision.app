import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "../Components/App/App";
import SignIn from "../Components/SignIn/SignIn";
import NotFound from '../Components/NotFound/NotFound';
// import '../Firebase/Firebase'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact={true}/>
      <Route path='/sign' component={SignIn}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;