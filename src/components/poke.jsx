import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import { useState } from "react";

export function Pokemon(props) {

  const [click, setclick] = useState(false)

  if (click) {
    return (<>

      <Card id="back" 
      onClick={() => { setclick(!click) }}>

        <CardImg
          src={props.img }
        />
        <CardTitle tag="h5">{props.name}</CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {props.subtitle}
        </CardSubtitle>
      </Card>

    </>
    )
  } else {
    return (<>

      <Card id="front"
       onClick={() => { setclick(!click) }}>

        <CardImg
          src={'https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png'}
        />
        <CardTitle tag="h5">{'???????'}</CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {'???????'}
        </CardSubtitle>
      </Card>
    </>
    )
  }



}