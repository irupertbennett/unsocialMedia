import './App.css';
import Navbar from './navbar/navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './Auth/signup';
import Profile from './profile/profile';
import SignIn from './Auth/signin';
import ForgottenPassword from './Auth/forgottenpassword'
import Forum from './forum/Forum';

function App() {

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <Switch>
          <Route exact path='/'>
            <SignIn/>
          </Route>
          <Route path='/account'>
            <Profile/>
          </Route>
          <Route path='/register'>
            <SignUp/>
          </Route>
          <Route path='/signIn'>
            <SignIn/>
          </Route>
          <Route path='/resetPassword'>
            <ForgottenPassword/>
          </Route>
          <Route exact path='/forum'>
            <Forum/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
