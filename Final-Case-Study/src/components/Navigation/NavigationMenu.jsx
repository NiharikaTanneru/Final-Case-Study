import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavigationMenuButtons from "./NavigationMenuButtons";

export default function NavigationMenu() {
  return (
    <Navbar key="sm" bg="dark" expand="sm" variant="dark">
      <Container>
        <Link className="navbar-brand text-white fw-bold" to="/">
          <span className="logo fs-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRst6VM5VSgR6YWY4t9W-cLm2BHPp_KXnPI2A&usqp=CAU"
              alt="Logo"
              width="50rem"
              className="rounded-circle mx-2"
            />
            TopJobs
          </span>
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'sm'`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-'sm'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-'sm'`}
          placement="end"
          className="bg-light"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'sm'`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavigationMenuButtons />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
