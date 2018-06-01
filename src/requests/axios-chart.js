import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
});

export default instance;
