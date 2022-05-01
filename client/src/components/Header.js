import {useSelector} from "react-redux";
import {getUserId} from "../selectors";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    let routes = ['/home', '/resits'];
    const userId = useSelector(getUserId);

    if (!userId) {
        routes.push('/signup', '/login');
    } else {
        routes.push('/profile');
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
            >{routeName}</Nav.Link>
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
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
//         <header className={classes.nav}>
//             <img className={classes.logo} src='https://www.mirea.ru/upload/medialibrary/281/
// IIT_colour.jpg' />
//             {rows}
//         </header>
//     );
}

export default Header;