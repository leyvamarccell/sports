import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { CreateUserWithEmailAndPassword } from "../Auth";
import { SignInWithGoogle, SignOut } from "../Auth";
import { state } from "../Auth";
import User from '../User'


export let email
export let password

setTimeout(() => {
  console.log(state)
}, 5000);

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
    {
      state ? <div><User/></div>: <Button auto color="gradient" shadow onPress={handler}>
        Login
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
         
  
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          <button onClick={SignInWithGoogle}><img height={20} src="https://www.svgrepo.com/show/475656/google-color.svg" className="img-google" alt="" />Iniciar Sesion con Google</button>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={CreateUserWithEmailAndPassword}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
