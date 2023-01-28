import { Card } from "@nextui-org/react";

export default function Info({text, image}) {
  return (
   <>
    <div className="info-container">
        <Card>
            <Card.Body>
           
            <img src={image} height={70} alt="" />
            
                <p className="info-text">{text}</p>
            </Card.Body>
        </Card>
    </div>
   </>
  )
}
