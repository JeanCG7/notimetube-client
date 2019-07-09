import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { authService } from '../services/auth'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    };
  }

  handleClick = (e) => {
    e.preventDefault()
    authService.logout()
    this.props.onClickLogout()
  }

  onChangeSearch() {
    this.props.changeSearch(this.state.search);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render = () => {
    return (
      <section id="navigationBar">
        {this.props.isTokenValid ?
          <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Nav inline="true" className="align-items-center">
              <Navbar.Brand>NoTimeTube</Navbar.Brand>
              <Nav>
                <NavItem className="mr-3">
                  <Link to="/videos">Vídeos</Link>
                </NavItem>
                <NavItem className="mr-3">
                  <Link to="/videos/upload">Upload</Link>
                </NavItem>
              </Nav>
            </Nav>
            <Form inline>
              <Button to="/login" variant="outline-info" onClick={this.handleClick}>Logout</Button>
            </Form>
          </Navbar> : null}
      </section>
    )
  }
}