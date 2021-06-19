// import logo from '../../../assets/img/logo/logo.svg';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from 'react-router-dom';

import { store } from '../../../config/redux';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav> */}

          {/* <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch> */}

          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </Provider>

  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  );
}

export default App;
