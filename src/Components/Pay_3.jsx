import React from 'react'
import {Card, Text, User, Avatar, Button} from '@nextui-org/react'
import Modal from './Modal'
import { useGlobalState } from './GlobalState'

export default function Pay_3() {

    let inputValue = ''
const inputChange = useGlobalState(state => state.input_change)

  return (
    <div className='pay-container'>
        <Card variant='bordered'>
        <Card.Header>
       <Avatar text='2' textColor={"white"} color='primary'></Avatar>
       <Text className='pepe'>Comprar!!</Text>
        </Card.Header>
        <Card.Divider/>
            <Card.Body>
                <div className='pay_3'>
                   <input onChange={(e) => {
                    inputChange(e.target.value)
                   }} type="email" placeholder='Dirección de correo electrónico' className='input-email'/>
                 
                </div>
                
            </Card.Body>
            <Card.Divider/>
            <Card.Footer>
    <div className='button-pay'>
   
        <Modal></Modal>
        <h4>$1 = 160 cup</h4>
    </div>
    
            </Card.Footer>
            <Card.Divider/>
         
        </Card>
    </div>
  )
}