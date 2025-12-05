import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../sass/layout/header.scss";

const menu = [
  { name: "HOME", url: "/" },
  { name: "NOW PLAYING", url: "/nowplaying" },
  { name: "POPULAR", url: "/popular" },
  { name: "TV Shows", url: "/tv" },
];

const Header = () => {
  return (
    <>
      <Navbar expand="md" className="main-navbar">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className="text-light logo">
            Cinema At Home
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navToggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-menu-links">
              {menu.map((ele, index) => (
                <Nav.Link
                  as={NavLink}
                  className="text-light nav-links"
                  to={ele.url}
                  key={index}
                >
                  {ele.name}
                </Nav.Link>
              ))}
            </Nav>
            <Button className="login" variant="primary">
              LOGIN
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
