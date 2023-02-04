import { Modal, useModal, Button, Text } from "@nextui-org/react";
import QRCode from "react-qr-code";
import { useGlobalState } from "./GlobalState";
import { toast } from "react-hot-toast";
import { inputValue } from "./Depositar";
import {setDoc, doc, updateDoc, getDoc} from 'firebase/firestore'
import { db } from "./firebase";
import { userEmail } from "./Auth";
import { useState } from "react";

export default function ModalDepositar() {


const wallet = useGlobalState(state => state.wallet)
const coin = useGlobalState(state => state.coin)
const coins = useGlobalState(state => state.coins)

let fecha = new Date().toLocaleString()
  
const [value, setValue] = useState({})
 
setTimeout(() => {
  getDoc(doc(db, 'users', userEmail))
  .then(res => setValue(res.data()))

}, 4000)
   
  const depositar = value.depositar

  let depositarState = inputValue + ' ' + ' ' + coin + ' ' + fecha +  '-------------------------------------------'
  

const setDataPay = () => {
updateDoc(doc(db, 'users', userEmail), {
 depositar : depositarState
})
}

const stateModal = () => {
  if(coin == '') {
    toast.error('Selecciona un método de pago')
  }else if(inputValue < '1' || inputValue == undefined) {
    toast.error('El monto debe ser mayor a $1')
  }else {
    depositarState = depositarState + depositar
    setVisible(true)
    setDataPay()
    
  }
}

  const { setVisible, bindings } = useModal();
  return (
    <>
<div>
      <Button auto color="primary" flat onPress={() => stateModal()}>
        Recargar cuenta con: {coin}
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Recargar cuenta con {coin}
          </Text>
        </Modal.Header>
        <Modal.Body>
        <div className="qr-code-container">
        <QRCode  style={{height: '200px'}} value={wallet}></QRCode>
        </div>
        <Text className="modal-text-depositar-2">O transfiere a esta billetera:</Text>
        <Text className="modal-text-depositar"  size={20}>
          {wallet}
          </Text>
       <Text className="modal-text-depositar-2">Esta cantidad exacta</Text>
       <Text className="modal-text-depositar" size={20}>{Number(inputValue)/coins + Number(inputValue)/coins * 0.02}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Cerrar
          </Button>
          <Button auto onPress={() => setVisible(false)}>
            Listo
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  
    </>
    
  );
}
