import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { CreateUserWithEmailAndPassword } from "../Auth"
import { state } from "../Auth";
import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase.js'
import { userEmail } from "../Auth.js";
import { Toaster } from "react-hot-toast";
import { addUsers } from "../Database";
import Users from '../User'

export let email
export let password
export let passwordCheck

export default function App() {

  const [value, setValue] = useState({})
 
  setTimeout(() => {
    getDoc(doc(db, 'users', userEmail))
    .then(res => setValue(res.data()))
  
  }, 4000)
     
  
    //res => res.forEach(data =>  setValue(data.data()))
    
    const image = value.image
  


  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div>
    {
      state ? <div>
      <Users image={image}/>
      
      </div>: <Button auto color="primary" flat  onPress={handler}>
      Registrarse
      </Button> 
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
              Registrarse
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
            onChange={e => email = e.target.value}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            onChange={e => password = e.target.value}
          />
            <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Repeat Password"
            contentLeft={<Password fill="currentColor" />}
            onChange={e => passwordCheck = e.target.value}
          />
         
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
           
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cerrar
          </Button>
          <Button auto onPress={() => {
            closeHandler()
            CreateUserWithEmailAndPassword()
            setTimeout(() => {
              addUsers()
            }, 5000)
          }}>
           Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
      <Toaster/>
    </div>
  );
}
