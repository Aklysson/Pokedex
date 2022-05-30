
import { Pokemon } from "./poke";
import React from "react";


export function Pokelist() {

    const pokemon = [
        { Url: '', Name: 'Charizar', Tipo: 'Fogo' },
        { Url: '', Name: 'Pikachu', Tipo: 'Raio' },
        { Url: '', Name: '', Tipo: '' },
        { Url: '', Name: '', Tipo: '' },
        { Url: '', Name: '', Tipo: '' },
        { Url: '', Name: '', Tipo: '' },
        { Url: '', Name: '', Tipo: '' },
        { Url: '', Name: '', Tipo: '' },
        { Url: '', Name: '', Tipo: '' },
    ]

    const nomePokemon = pokemon.map( 
        c => <p>{c.Name}</p>
        )

    return (
        <div className="poke">
            <Pokemon Name={nomePokemon}/>
        </div>
    )
}