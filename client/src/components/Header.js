import {useDispatch, useSelector} from "react-redux";
import {getUserId, getUsername, isUserAuthenticated} from "../selectors";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {removeUser} from "../actions/users";

function Header() {
    const dispatch = useDispatch();
    let routes = ['/home', '/resits'];

    if (useSelector(isUserAuthenticated)) {
        routes.push();
    } else {
        routes.push('/signup', '/login');
    }

    let rows = [];

    for (let i = 0; i < routes.length; i++) {
        let nonCapitalizedRouteName = routes[i].substring(1);
        nonCapitalizedRouteName = nonCapitalizedRouteName ? nonCapitalizedRouteName : 'main';
        const routeName = (
            nonCapitalizedRouteName.charAt(0).toUpperCase() + nonCapitalizedRouteName.slice(1)
        );

        rows.push(
            <Nav.Link
                as={Link}
                key={i}
                to={routes[i]}
                style={{
                    "display": "flex",
                    "justifyContent": "center",
                    "alignContent": "center",
                    "flexDirection": "column"
                }}
            >
                    {routeName}
            </Nav.Link>
        );
    }

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  {rows}
                {/* Profile */}
                <NavDropdown title={useSelector(getUsername)} id="basic-nav-dropdown">
                    <NavDropdown.Item
                        as={Link}
                        to={'/profile'}
                    >
                        Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        href="#action/3.4"
                        onClick={() => dispatch(removeUser())}
                    >Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Header;