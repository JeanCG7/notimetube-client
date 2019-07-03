import axios from 'axios';

const url = 'http://localhost:3001/users'
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

export const register = (registerDto) => {
    // if(verifyIfExists(registerDto.email))
    //     return;
    axios.post(url, registerDto, axiosConfig)
        .then(resp => {
            alert('Usuário cadastrado com sucesso');
        })
        .catch(error => {
            alert('Erro ao cadastrar usuário.');
        })
}

export const verifyIfExists = (email) => {
    axios.get(`${url}/:${email}`)
        .then(resp => {
            if(resp != null)
            return false
        });
    return true;
}

export const registerServiceFactory = () => ({
    register,
    verifyIfExists
  });
  
export const registerService = registerServiceFactory();