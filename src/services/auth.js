import axios from 'axios'
import jwt  from 'jsonwebtoken'

const url = 'http://localhost:3001'

export const register = (user) => {
    return axios.post(url + '/register', user)
}

export const login = (user) => {
    return axios.post(url + '/login', user)
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
    register,
    login,
    isTokenValid,
    logout
  })
  
export const authService = authServiceFactory()