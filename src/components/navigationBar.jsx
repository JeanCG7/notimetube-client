import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { authService } from '../services/auth'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

class NavigationBar extends Component {
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
    this.props.history.push('/login')
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
              <Button variant="outline-info" onClick={this.handleClick}>Logout</Button>
            </Form>
          </Navbar> : null}
      </section>
    )
  }
}
export default withRouter(NavigationBar)
