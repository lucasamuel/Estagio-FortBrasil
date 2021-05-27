//Estilização dos componentes.

import styled from 'styled-components';
import background from '../../img/background-1.gif';


interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    };
}


export const Background = styled.div `
    height: 100%;
    width: 100%;
    color: white;
    text-align: center;

    img {
        height: auto;
        width: 1345px;
    }
    
    h1 {
        margin-top: -430px;
        padding-bottom: 40vh;
        text-transform: uppercase;
        font-size: 120px;

        letter-spacing: -4px;
        font-family: 'Bebas Neue', cursive;
        font-weight: bolder;
    }

    h5 {
        margin-top: -270px;
        font-size: 80px;
        text-transform: uppercase;

    }

    h6 {
        font-size: 40px;
        padding-bottom: 50vh;
    }

`;

export const Container = styled.main `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: black;

    height: 100%;
    width: 100%;

    h3 {
        color: white;
        text-transform: uppercase;
        font-size: 50px;
        margin-bottom: 7vh;
        
    }
`;

export const CardList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const urlImg = (props: ThumbnailData) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div `
    background: #f2f2f2;
    height: 440px;
    width: 300px;
    margin: 10px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-box-shadow: 10px 10px 4px -3px rgba(173,173,173,1);
    -moz-box-shadow: 10px 10px 4px -3px rgba(173,173,173,1);
    box-shadow: 10px 10px 4px -3px rgba(173,173,173,1);

    h2, p {
        padding: 5px;
        text-align: justify;
    }

    div#img {
        height: 410px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
        transition: all 2s;
    }


    &:hover {
        div#img {
            height: 100px;
        }
    }
`;

export const MoreButton = styled.div `
    background-color: whitesmoke;
    height: 50px;
    width: 180px;
    cursor: pointer;
    box-shadow: 3px 3px 10px 1px rgba(0,0,0,0.3);
    margin: 20px auto;
    padding:  0 50px;
    border-radius: 4px;
    text-align: center;

    &:hover {
        background: red;
    }

    h5 {
        margin-top: 5px;
        font-size: 18px;
    }
`;
