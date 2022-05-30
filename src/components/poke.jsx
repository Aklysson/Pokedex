import {Card, CardImg, CardTitle, CardSubtitle, CardText} from "reactstrap";
import { useState } from "react";




export function Pokemon(props) {

  const [click,setclick] = useState(false)

  const pokemon = [
    { Url: '', Name: 'Charizar', Tipo: '' },
    { Url: '', Name: 'Pikachu', Tipo: '' },
    { Url: '', Name: '', Tipo: '' },
    { Url: '', Name: '', Tipo: '' },
    { Url: '', Name: '', Tipo: '' },
    { Url: '', Name: '', Tipo: '' },
    { Url: '', Name: '', Tipo: '' },
    { Url: '', Name: '', Tipo: '' },
    { Url: '', Name: '', Tipo: '' },
]

const listaPokemon = pokemon.map(
    c => <p>{c.Name}</p>
)

    return ( <>
    <Card onClick={()=>{setclick(!click)}}>
      
    <CardImg
      src={click?props.img:'https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png'}
    />
      <CardTitle tag="h5">{click?listaPokemon:'???????'}</CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {click?props.subtitle:'???????'}
      </CardSubtitle>
  </Card>
  </>
)
}