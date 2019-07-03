import axios from 'axios';

const url = 'http://localhost:3001/videos'
// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     }
//   };

export const upload = (videoDto) => {
    axios.post(url, videoDto)
        .then(resp => {
            alert('Upload feito com sucesso');
        })
        .catch(error => {
            alert('Erro ao realizar upload.');
        })
}

export const get = (id) => {
    //axios.get(url + '/id');
    return { title: 'teste', description: 'testezera'}
}



export const videoServiceFactory = () => ({
    upload,
    get
  });
  
export const videoService = videoServiceFactory();