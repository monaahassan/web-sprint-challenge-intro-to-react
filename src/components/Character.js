// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterInfo from './CharacterInfo';
export default function Character(){
const[character, setCharacter] = useState(());

useEffect (() => {
    axios.get('https://rickandmortyapi.com/api/characters')
    .then(response => {

        console.log(response.data);
        setCharacter(response.data);
    })
    .catch(err => {
        console.log(err)
    })
},[])
    return(
        <section className="character-list">
        <h2>Welcome</h2>
        {Character.map((chars, id) => {
            return <Character key={id} chars ={chars} />;
        })}
        </section>
    );
        }