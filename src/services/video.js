import axios from 'axios';

const url = 'http://localhost:3001/videos'
// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     }
//   };

export const upload = (video) => {
    const token = window.localStorage.getItem('token');
    return axios.post(url, video, {headers: {"Authorization": token, "content-type": 'multipart/form-data'} })
}

export const get = (id) => {
    const token = window.localStorage.getItem('token');
    return axios.get(url + `/${id}`, {headers: {"Authorization": token}});
}

export const getAll = () => {
    const token = window.localStorage.getItem('token');
    return axios.get(url, {headers: {"Authorization": token}});
}



export const videoServiceFactory = () => ({
    upload,
    get,
    getAll
  });
  
export const videoService = videoServiceFactory();