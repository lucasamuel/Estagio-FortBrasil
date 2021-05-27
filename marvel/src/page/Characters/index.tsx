//Código da página que lista os Personagens.

//Importando os componentes que serão utilizados
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api'

import background from '../../img/background-1.gif';

import { Container, Card, CardList, Background, MoreButton } from './styles';

//
interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

//Componente Personagens e Configuração de GET os atributos da API

const Characters: React.FC = () => {

    const [characters, setCharacters] = useState<ResponseData[]>([])
    
    useEffect(() => {
        api.get('/characters')
        .then(response => {            
            setCharacters(response.data.data.results);
        })
        .catch(erro => console.log(erro))
    }, []);

const handleMore = useCallback(async () => {
    try {
        const offset = characters.length;
        const response = await api.get('characters', {
            params: {
                offset,
            },
        });

        setCharacters([... characters, ...response.data.data.results])

    } catch (err) {
        console.log(err);
    }
},[characters]);

// Inserção dos conteúdos da Página
    return (
        <Container>
            <Background>
            <img src={background} alt="" />
            <h1>Marvel</h1>
            <h5>Assemble</h5>
            <h6>A plataforma para você descobrir um pouco mais sobre seus heróis favoritos!</h6>
            </Background>
            <h3>Heróis da Marvel</h3>

{/* Busca dos atributos dos Personagens/Character. */}

            <CardList>
                {characters.map(character => {
                    return (
                        <Card key={character.id} thumbnail={character.thumbnail}>
                        <div id="img" />
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                        </Card>
                        )
                    })}
            </CardList>
                    
            <MoreButton onClick={handleMore}>
                <h5>Mostrar mais</h5>
            </MoreButton>
            

           </Container>)
}

export default Characters;