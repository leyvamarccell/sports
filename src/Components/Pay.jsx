import React from 'react'
import {Card, Text, User, Avatar} from '@nextui-org/react'
import { useGlobalState } from './GlobalState'
import { useState } from 'react'

export default function Pay() {

    const [state, setState] = useState('')

    const diamons = useGlobalState(state => state.coins_change)
    const value = useGlobalState(state => state.value_change)

  return (
    <div className='pay-container'>
        <Card variant='bordered'>
        <Card.Header>
       <Avatar text='1' textColor={"white"} color='primary'></Avatar>
       <Text className='pepe'>Seleccionar cantidad {state}</Text>
        </Card.Header>
        <Card.Divider/>
            <Card.Body>
                <div className='pay-amount-container'>
                    <div className='pay-amount' onClick={() => {
                        diamons(100)
                        value('$1.01')
                        setState('100')
                    }}>100 Diamantes</div>
                    <div className='pay-amount' onClick={() => {
                        diamons(210)
                        value('$2.02')
                        setState('210')
                    }}>210 Diamantes</div>
                    <div className='pay-amount' onClick={() => {
                        diamons(530)
                        value('$5.03')
                        setState('530')
                    }}>530 Diamantes</div>
                    <div className='pay-amount' onClick={() =>  {
                        diamons(1080)
                        value('$10.06')
                        setState('1080')
                    }}>1080 Diamantes</div>
                    <div className='pay-amount' onClick={() =>  {
                        diamons(2200)
                        value('$20.11')
                        setState('2200')
                    }}>2200 Diamantes</div>
                </div>
            </Card.Body>
            <Card.Divider/>
         
        </Card>
    </div>
  )
}
