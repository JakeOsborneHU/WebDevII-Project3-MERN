// retreived from example at https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Service from './components/service'
import About from './components/about'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



/**********************************************************************************
 * saved from previously created version of index.js
***********************************************************************************
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
**********************************************************************************/