import { Card } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../Components/firebase'
import { userEmail } from "../Components/Auth"


export default function SaldoInfo() {

    const [value, setValue] = useState({})

    let a = `${userEmail}`
  
    getDocs(collection(db, a))
    .then(res => res.forEach(data =>  setValue(data.data())))
    
    const saldo = value.saldo

  return (
    <>
        <div className='saldo-info-container'>
            <Card>
<Card.Body>
<h2 className='text-saldo-info'>${saldo}</h2>
<div className='saldo-info-div'>
<Button auto flat color={"primary"} className='button-saldo-info'>Depositar</Button>
<Button auto flat color={"primary"} className='button-saldo-info'>Retirar</Button>
</div>
    
</Card.Body>
            </Card>
        </div>
    </>
  )
}
