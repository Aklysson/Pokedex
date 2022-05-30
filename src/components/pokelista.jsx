
import { Pokemon } from "./poke";
import React from "react";


export function Pokelist() {

    const pokemons = [
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f4.png', name: 'Charizar', tipo: 'Fogo' },
        { url: 'https://w7.pngwing.com/pngs/633/903/png-transparent-hey-you-pikachu-pokemon-go-ash-ketchum-pikachu-video-game-fictional-character-cartoon-thumbnail.png', name: 'Pikachu', tipo: 'Raio' },
        { url: '', name: '', tipo: '' },
        { url: '', name: '', tipo: '' },
        { url: '', name: '', tipo: '' },
        { url: '', name: '', tipo: '' },
        { url: '', name: '', tipo: '' },
        { url: '', name: '', tipo: '' },
        { url: '', name: '', tipo: '' },
    ]

    return (
        <div className="poke">
            {
                pokemons.map((pokemon) => (
                    <Pokemon name={pokemon.name} subtitle={pokemon.tipo} img={pokemon.url}/>
                ))
            }
        </div>
    )
}