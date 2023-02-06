import { Card, Button} from "@nextui-org/react";
import { userEmail } from "./Auth";
import { db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { state } from "./Auth";
import { toast } from "react-hot-toast";

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
            <Button size={"sm"} flat onClick={() => {
              if(state === false) toast.error('Debe autenticarse')
              else window.open('/depositar')
            }}>Depositar</Button>
            <Button size={"sm"} flat onClick={() => {
                if(state === false) toast.error('Debe autenticarse')
              else window.open('/retirar')
            }}>Retirar</Button>
        </div>
        </Card.Body>
    </Card>
    </div>
  )
}
