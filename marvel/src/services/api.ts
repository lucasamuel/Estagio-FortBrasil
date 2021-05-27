//Código para requisição da API

import axios from 'axios';
import md5 from 'md5';


const publicKey = '5e7fe05bab04e717193ab316e67e03b5';
const privateKey = '9efb9a05d795ecd15cc7bacc42e670175452f974';

const timeStamp = Number(new Date());
const hash = md5(timeStamp + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: timeStamp,
        apikey: publicKey,
        hash,
    }
});

export default api;