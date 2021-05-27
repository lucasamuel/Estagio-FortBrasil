import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';



const publicKey = '5e7fe05bab04e717193ab316e67e03b5';
const privateKey = '9efb9a05d795ecd15cc7bacc42e670175452f974';

const timeStamp = Number(new Date());
const hash = md5(timeStamp + privateKey + publicKey);

const App: React.FC = () => {

  useEffect( () =>{
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .then(response => console.log(response.data.data))
  }, [] )
  return <div className="App">Marvel</div>
  
};

export default App;
