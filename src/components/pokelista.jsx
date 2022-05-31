
import { Pokemon } from "./poke";
import React from "react";


export function Pokelist() {

    const pokemons = [
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png', name: 'Charizar', tipo: 'Fogo' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', name: 'Pikachu', tipo: 'Raio' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', name: 'Squirtle', tipo: 'Água' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png', name: 'Bulbasaur', tipo: 'Planta' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png', name: 'Caterpie', tipo: 'inseto' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png', name: 'Pidgeotto', tipo: 'Normal' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png', name: 'Jigglypuff', tipo: 'Fada' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png', name: 'Diglett', tipo: 'Ground' },
        { url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png', name: 'Alakazam', tipo: 'Psíquico' },
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