import { Button, Card } from "@nextui-org/react";

export default function ApuestaSport() {
  return (
    <>
    <div className="apuesta-sports-container">
    <Card>
            <Card.Body>
                <div>
                    <h4 className="text-apuesta">Real Madrid</h4>
                    <h4 className="text-apuesta">Barcelona</h4>
                    <h3 className="text-apuesta text-tasa">1x2</h3>
                </div>
                <div className="container-apuesta">
                    <div className="div-apuesta">
                        <h4 className="apuesta-text">Real Madrid</h4>
                        <h4 className="apuesta-text ">2.98</h4>
                    </div>
                    <div className="div-apuesta">
                    <h4 className="apuesta-text">Empate</h4>
                        <h4 className="apuesta-text ">2.98</h4>
                    </div>
                    <div className="div-apuesta">
                    <h4 className="apuesta-text">Real Madrid</h4>
                        <h4 className="apuesta-text ">2.98</h4>
                    </div>
                    
                </div>
            </Card.Body>
        </Card>
        
    </div>
        
    </>
  )
}
