import { Card, Col, Text } from "@nextui-org/react";

export const Cards = () => (
 <>
    <div className="card-container">
        <Card className="card" isPressable>
            <Card.Body>
            <div className="card-div">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/sports-equipment-4035949-3342374.png" height={100} alt="" />
            <div>
            <h3 className="text-card-h3">Deportes</h3>
            <p className="text-card-p">Apuesta en cualquier deporte o liga.</p>
            </div>
    </div>
            </Card.Body>
        </Card>
    </div>
 </>
);
