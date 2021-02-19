import axios from 'axios';

const api = axios.create({
  baseURL: 'http://virtserver.swaggerhub.com/ateliedepropaganda/register/1.0.0',
});

export default api;