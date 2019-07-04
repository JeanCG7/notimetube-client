import axios from 'axios';

const url = 'http://localhost:3001'

export const register = (user) => {
    return axios.post(url + '/register', user);
}

export const login = (user) => {
    return axios.post(url + '/login', user);
}

export const verifyIfExists = (email) => {
    axios.get(`${url}/:${email}`)
        .then(resp => {
            if(resp != null)
            return false
        });
    return true;
}

export const authServiceFactory = () => ({
    register,
    verifyIfExists, 
    login
  });
  
export const authService = authServiceFactory();