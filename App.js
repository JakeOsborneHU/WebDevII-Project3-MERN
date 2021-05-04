import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


function App() {
    return (
        <Router>
            <Navbar />
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


function Navbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Chicopedia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#create">Create</Nav.Link>
                    <Nav.Link href="#browse">Browse</Nav.Link>
                    <Nav.Link href="#compare">Compare</Nav.Link>
                    <Nav.Link href="#logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
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