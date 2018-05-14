import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR,AUD'
});

export default instance;
