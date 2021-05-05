// retreived from example at https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Create from './components/create'
//import About from './components/about'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={Create} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
