import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Navbar/Header';
import Home from './components/Home/Home';
import AddBook from './components/AddBook/AddBook';
import Login from './components/Login/Login';

import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import CheckOut from './components/CheckOut/CheckOut';
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';



export const UserContext=createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <h3>email: {loggedInUser.email}</h3>
      <Router>
     
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
         <PrivateRoute path="/checkout/:bookId">
           <CheckOut/>
         </PrivateRoute>
          <PrivateRoute  path="/admin">
           <Admin/>
          </PrivateRoute>
          <Route>
            <Order/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>


    </UserContext.Provider>
  );
}

export default App;
