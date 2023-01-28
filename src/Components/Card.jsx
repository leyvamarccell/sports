import { Button, Card } from "@nextui-org/react"

export default function Cards() {
  return (
    <>
        <div className="card-container">
            <Card>
                <Card.Body>
                <div className="card-text-container">
                    <h2>$0.00</h2>
                </div>
                   <div className="card-button-container">
                    <Button flat auto>Depositar</Button>
                    <Button flat auto>Retirar</Button>
                   </div>
                </Card.Body>
            </Card>
        </div>
    </>
  )
}
