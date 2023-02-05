import { Card, Button} from "@nextui-org/react";
import { userEmail } from "./Auth";
import { db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";

export default function SaldoInfo() {

    const [value, setValue] = useState({})
 
    setTimeout(() => {
      getDoc(doc(db, 'users', userEmail))
      .then(res => setValue(res.data()))
    
    }, 4000)
       
    
      //res => res.forEach(data =>  setValue(data.data()))
    
      const saldo = value.saldo
    

  return (
    <div className="saldo-info-container">
  <Card>
        <Card.Body>
        <div className="saldo-info-text">
        
            <h2>${saldo}</h2>
        </div>
        <div className="button-info-saldo">
            <Button size={"sm"} flat>Depositar</Button>
            <Button size={"sm"} flat>Retirar</Button>
        </div>
        </Card.Body>
    </Card>
    </div>
  )
}
