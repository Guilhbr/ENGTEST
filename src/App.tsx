import React from 'react';
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <PrivateRoute path='/profile' Component={Profile}></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
