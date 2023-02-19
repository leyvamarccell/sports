import React from 'react'
import { Collapse, Card, Text } from '@nextui-org/react'

export default function Collapses() {
  return (
    <>
        <div className='collapse'>
        <Card>
            <Card.Body>
            <Collapse.Group >
                <Collapse className='collapse-content' title={<Text>Cómo comprar Diamonds de Free Fire con código:</Text>}>
<ol>
    <li>Selecciona la cantidad de diamantes que quieres comprar.</li>
    <li>Elige la forma de pago.</li>
    <li>Introduce un correo electrónico válido donde recibirás el cupón de diamantes.</li>
    <li>Revisa tu pedido y completa la transacción.
</li>
</ol>
                </Collapse>
             
            </Collapse.Group>
            </Card.Body>
        </Card>
          
        </div>
    </>
  )
}
