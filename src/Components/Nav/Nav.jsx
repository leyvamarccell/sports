import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Modal from '../Modal/Modal.jsx'
import ModalRegistro from '../ModalRegistro/ModalRegistro'

export default function App() {

  return (
    <>
 <Layout>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
       
        <Navbar.Content>
       <Navbar.Item>
<img height={25} src="https://www.svgrepo.com/show/304489/notification.svg" alt="" />
       </Navbar.Item>
            <Navbar.Item>
        <Modal/>
            </Navbar.Item>
          <Navbar.Item>
          <ModalRegistro/>
          </Navbar.Item>
          
        </Navbar.Content>
      </Navbar>
    </Layout>
    
    </>
   
  )
}
