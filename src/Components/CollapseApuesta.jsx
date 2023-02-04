import { Card, Collapse } from '@nextui-org/react'
import React from 'react'

export default function CollapseApuesta() {
  return (
   <>
   <Card>
    <Card.Body>
    <Collapse.Group>
        <Collapse title={<h6>Jpña</h6>}>
            <h1>Hola</h1>
           
        </Collapse>
    </Collapse.Group>
    </Card.Body>
   </Card>
  
   </>
  )
}
