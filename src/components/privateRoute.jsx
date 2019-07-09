import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { authService } from '../services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
    
    const isAuthorized = authService.isTokenValid()

    return (
        <Route {...rest}
        render={props => (
            isAuthorized ? (
                <Component {...props}/> 
            ): (
                <Redirect to={{ pathname: '/login', 
                state: { from: props.location } }}/>
            )
        )}/>
    )
}

export default PrivateRoute