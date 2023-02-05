import { Card, Text } from "@nextui-org/react"

export default function Servicios({image, text, text_2}) {
  return (
    <>
    <div className="servicios-container">
    <Card>
        <Card.Body>
        <div className="servicios-img-container">
                <img src={image} alt="" height={80}/>
            </div>
            <div className="servicios-text-container">
            <div className="text-servicios-div">
            <Text className="text-servicios">{text}</Text>
            </div>
                
                <Text  className="text-servicios-2" size={"$sm"}>{text_2}</Text>
            </div>
        </Card.Body>
        </Card>
    </div>
       
    </>
  )
}
