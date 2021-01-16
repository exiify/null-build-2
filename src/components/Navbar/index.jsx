import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export function fullNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      push={false}
      sticky="top"
      style={{ backgroundColor: "#000" }}
      variant="dark"
    >
      <Navbar.Brand style={{ fontFamily: "Poppins, sans-serif" }} href="/">
        NULL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          {/*<NavDropdown href="/" title="Vote">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
  </NavDropdown> */}
          <Nav.Link href="/"> Home</Nav.Link>
          <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
          <Nav.Link href="https://discord.com/oauth2/authorize?client_id=796009533323345941&permissions=473394422&scope=bot">
            {" "}
            Add To Discord
          </Nav.Link>
          <Nav.Link href="https://discord.com/invite/C4Kzcm7B94">
            {" "}
            Support Server
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
