import jwt from 'jsonwebtoken';
import api from './api';

export const isAuthenticated = () => localStorage.getItem('token') !== null;

export const getToken = () => localStorage.getItem('token');

export const register = async (user) => {
    return api.post('/register', user);
}

export const login = async (user) => {
    return api.post('/login', user);
}

export const logout = () => {
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('token')
}

export const isTokenValid = () => {
    const token = window.localStorage.getItem('token')
    if (!token)
        return false

    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET)

    const now = parseInt(new Date().getTime() / 1000, 10)
    if (decoded.exp <= now)
        return false

    const userId = window.localStorage.getItem('userId')
    if (userId != decoded.id)
        return false

    return true
}

export const authServiceFactory = () => ({
    isAuthenticated,
    getToken,
    register,
    login,
    isTokenValid,
    logout
});

export const authService = authServiceFactory();