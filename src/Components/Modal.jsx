import { Modal, useModal, Button, Text } from "@nextui-org/react";
import QRCode from "react-qr-code";
import { useGlobalState } from "./GlobalState";

export default function Modals() {

  const diamons = useGlobalState(state => state.coins)
  const wallet = useGlobalState(state => state.wallet)
  const value = useGlobalState(state => state.value)

  const { setVisible, bindings } = useModal();
  return (
    <div >
      <Button auto shadow  onPress={() => setVisible(true)} className='button'>
        Comprar
      </Button>
      <Modal
        scroll
        width="350px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
           {diamons} Diamantes: {value}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="qr-container">
          <QRCode className="qr" value={wallet}></QRCode>
          </div>
   <div className="text-p">
   <Text className="text" size={"$sm"}>Transfiere a esta cuenta o wallet:</Text>
   <Text className="text">{wallet}</Text>
   </div>

        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onPress={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
