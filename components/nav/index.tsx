import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styles from './Nav.module.scss';

export default function Header() {
  return (
    <div className={styles.navbar}>
    <Container fluid="lg">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto col-xl-9 col-lg-11 col-md-12 col-sm-12">
            <Nav.Link className="col" href="#home">Trang Chủ</Nav.Link>
            <Nav.Link className="col" href="#link">Giày Nam</Nav.Link>
            <Nav.Link className="col" href="#link">Giày Nữ</Nav.Link>
            <Nav.Link className="col" href="#link">Giày Đôi</Nav.Link>
            <Nav.Link className="col" href="#link">Phụ Kiện</Nav.Link>
            <Nav.Link className="col" href="#link">Khuyến Mại</Nav.Link>
            <Nav.Link className="col" href="#link">Liên Hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </div>
  )
}