//Arquivo com a página que lista os Personagens.

import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import { Container } from './styles';

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

const Characters: React.FC = () => {

    const [characters, setCharacters] = useState<ResponseData[]>([])
    
    useEffect(() => {
        api.get('/characters')
        .then(response => {            
            setCharacters(response.data.data.results);
        })
        .catch(erro => console.log(erro))
    }, []);

    return (<Container>
            <h1>Characters</h1>
            <ul>
                {characters.map(character => {
                    return (
                        <li>
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                            alt={`Imagem do Personagem${character.name}`}
                            />
                            <span className="name">{character.name}</span>
                            <span className="description">{character.description}</span>
                        </li>
                    )
                })}
            </ul>
           </Container>)
}

export default Characters;