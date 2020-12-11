import React from "react";
import 'styles.css';

export default function CharacterInfo(props){
    return (
        
    <div>
    <h1>{props.chars.name}</h1>
    <img src={props.chars.image}></img>
    <h1>{props.chars.gender}</h1>
    <h1>{props.chars.status}</h1>
    </div>
    )
}