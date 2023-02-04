import { Card } from '@nextui-org/react'
import React from 'react'

export default function CardLigas({image}) {
  return (
    <Card className='card-ligas'>
        <Card.Body>
            <img src={image} height={70} alt="" />
        </Card.Body>
    </Card>
  )
}
