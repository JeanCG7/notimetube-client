import api from './api';

export const upload = (video) => {
  return api.post('/videos', video, { headers: { "content-type": 'multipart/form-data' } })
}

export const get = (id) => {
  return api.get('/videos' + `/${id}`);
}

export const getAll = async (search) => {
  const url = search === '' ? '/videos' : `/videos?search=${search}`;
  return api.get(url);
}


export const videoServiceFactory = () => ({
  upload,
  get,
  getAll
});

export const videoService = videoServiceFactory();