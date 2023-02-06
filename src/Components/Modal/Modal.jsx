import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { CreateUserWithEmailAndPassword, SignInWithEmail } from "../Auth";
import { SignInWithGoogle, SignOut } from "../Auth";
import { state } from "../Auth";
import { addUsers } from "../Database";
import { useState } from "react";
import { getDocs, doc, collection, getDoc} from "firebase/firestore";
import { db } from "../firebase";
import { userEmail } from "../Auth";

export let emailLogin
export let passwordLogin

export default function App() {
  
  const [value, setValue] = useState({})
 
setTimeout(() => {
  getDoc(doc(db, 'users', userEmail))
  .then(res => setValue(res.data()))

}, 4000)
   

  //res => res.forEach(data =>  setValue(data.data()))

  const saldo = value.saldo

  const [visible, setVisible] = React.useState(false);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div>
    {
      state ? <div><h4>${saldo}</h4></div> : <Button auto color="gradient" shadow onPress={handler}>Sign In</Button> 
    }
   
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            
            <Text b size={18}>
              Iniciar Sesión
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
            onChange={e => emailLogin = e.target.value}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            onChange={e => passwordLogin = e.target.value}
          />
         
  
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          <button onClick={ () => {
             SignInWithGoogle()
             setTimeout(() => {
              if(saldo === undefined) addUsers()
              else ''
             }, 10000)
             
          }}><img height={20} src="https://www.svgrepo.com/show/475656/google-color.svg" className="img-google" alt="" /></button>
         
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cerrar
          </Button>
          <Button auto onPress={SignInWithEmail}>
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
