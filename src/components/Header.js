import classes from './Header.module.css';
import NavItem from "./NavItem";
import {useSelector} from "react-redux";
import getUserId from "../selectors";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Header() {
    let routes = ['/', '/home', '/dialogues'];
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
                key={i}
                to
                href={routes[i]}
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
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