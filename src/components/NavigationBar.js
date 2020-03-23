import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #798180;
  }


  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffcc;
    &:hover {
      color: #07eed1;
    };
  }
`;

const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg' fixed="top">
            <Navbar.Brand href='#header'>DM</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link href='#header'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='#about'>About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='#portfolio'>Portfolio</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='#contact'>Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     </Styles>
)

export default NavigationBar