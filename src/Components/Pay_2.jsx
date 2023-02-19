import React from 'react'
import {Card, Text, User, Avatar} from '@nextui-org/react'
import { useGlobalState } from './GlobalState'
import { useState } from 'react'

export default function Pay_2() {

    const wallet = useGlobalState(state => state.wallet_change)
    const [state, setState] = useState('')

  return (
    <div className='pay-container'>
        <Card variant='bordered'>
        <Card.Header>
       <Avatar text='2' textColor={"white"} color='primary'></Avatar>
       <Text className='pepe'>Seleccionar método de pago: {state}</Text>
        </Card.Header>
        <Card.Divider/>
            <Card.Body>
                <div className='pay-amount-container'>
                   <div className='pay-amount-coin' onClick={() => {
                    wallet('9205 1299 7508 7231')
                    setState('CUP')
                    }}>
                    <User name='CUP' src='https://qvapay.com/img/coins/bankcup.svg'></User>
                   </div>
                   <div className='pay-amount-coin' onClick={() => {
                    wallet('9225 0699 9591 5977')
                    setState('MLC')
                    }}>
                    <User name='MLC' src='https://qvapay.com/img/coins/bankmlc.svg'></User>
                   </div>
                   <div className='pay-amount-coin' onClick={() => {
                    wallet('bc1qtfgly3f5mwt3qx23zekln2eln4g980sh8da5sv')
                    setState('BTC')
                    }}>
                    <User name='BTC' src='https://qvapay.com/img/coins/btc.svg'></User>
                   </div>
                   <div className='pay-amount-coin' onClick={() => {
                    wallet('TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd')
                    setState('TRX')
                    }}>
                    <User name='TRX' src='https://qvapay.com/img/coins/trx.svg'></User>
                   </div>
                   <div className='pay-amount-coin' onClick={() => {
                    wallet('ltc1qhkthlnurv6ce8n4uq7qk0pcjyah6f0uerg8acv')
                    setState('LTC')
                    }}>
                    <User name='LTC' src='https://qvapay.com/img/coins/ltc.svg'></User>
                   </div>
                   <div className='pay-amount-coin' onClick={() => {
                    wallet('D771Z5Q4CSPxhJD2VWX9Vqj5EyPmktLKV9')
                    setState('DOGE')
                    }}>
                    <User name='DOG' src='https://qvapay.com/img/coins/doge.svg'></User>
                   </div>
                </div>
            </Card.Body>
            <Card.Divider/>
         
        </Card>
    </div>
  )
}
