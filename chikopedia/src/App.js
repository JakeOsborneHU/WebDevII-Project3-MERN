import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
    return (
        <Router>
            <MyNavbar />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="*">
                    <Notfound />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;

function About() {
    return <p>About</p>;
}

function Signup() {
    return (
        <form>
            <Button>Press Me</Button>
        </form>);
}

function Notfound() {
    return <p> Page not found</p>
}
function Homepage() {
    return <p>Homepage</p>;
}

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand to="#home">Chicopedia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="#create">Create</Nav.Link>
                    <Nav.Link to="#browse">Browse</Nav.Link>
                    <Nav.Link to="#compare">Compare</Nav.Link>
                    <Nav.Link to="#logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

function Create() {
  return(
    <Form>
      <Form.Group>
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" />
        <Form.Label>Name</Form.Label>
        <Form.Text />
        <Form.Label>Height</Form.Label>
        <Form.Text />
        <Form.Label>Weight</Form.Label>
        <Form.Text />
        <Form.Label>Type</Form.Label>
        <select>
          <option selected value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Steel">Steel</option>
          <option value="Fairy">Fairy</option>
        </select>
        <Form.Label>Secondary Type</Form.Label>
        <select>
          <option selected value="None">None</option>
          <option value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dark">Dark</option>
          <option value="Dragon">Dragon</option>
          <option value="Steel">Steel</option>
          <option value="Fairy">Fairy</option>
        </select>
      </Form.Group>
    </Form>
  );
}



/*
<h1>Chikopedia Homepage</h1>
<body>
    <script src="ChikopediaTypeChart.js"></script>
    <script>
        var URLbase = "/PokemonAPI/authenticate";
        var userToCheck;
        var passwordToCheck;

        function AuthenticateUser()
        {
            userToCheck=document.getElementById("Username");
            passwordToCheck=document.getElementById("Password");
            if(userToCheck === "")
            {
                document.getElementById("missingData").hidden = false;
            }
            else if (passwordToCheck === "")
            {
                document.getElementById("missingData").hidden = false;
            }
            else
            {
                document.getElementById("missingData").hidden = true;
            }

            var URLtoSend = URLbase + "user:" + usertoCheck + "pass:" + passwordToCheck;

            fetch(URLtoSend)
        }
    </script>
    <form>
        <div>
            <input type="text" id="Username">Username
            <input type="text" id="Password">Password
            <p hidden id="missingData">Please input all data.</p>
            <p hidden id="invalidData">The submitted Username/Password was invalid.</p>
        </div>
        <input type="button" onclick="AuthenticateUser()">
    </form>

</body>
*/