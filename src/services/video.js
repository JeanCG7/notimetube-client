import api from './api';

export const upload = (video) => {
  return api.post('/videos', video, { headers: { "content-type": 'multipart/form-data' } })
}

export const get = (id) => {
  return api.get('/videos' + `/${id}`);
}

export const getAll = () => {
  return api.get('/videos');
}



export const videoServiceFactory = () => ({
  upload,
  get,
  getAll
});

export const videoService = videoServiceFactory();