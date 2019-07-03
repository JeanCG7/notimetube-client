import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render = ()  => {
        return (
            <section id="navigationBar">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>NoTimeTube</Navbar.Brand>
                    <Nav>
                        <NavItem>
                            <Link to="/videos">Vídeos</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/videos/upload">Upload</Link>
                        </NavItem>
                    </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </section>
        )
    }
}