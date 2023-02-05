import { Card, Link } from "@nextui-org/react";

export default function CardVisa() {
  return (
    <div className="visa-container">
  <Card>
    <Card.Body>
        <div className="visa-div">
            <img src="https://www.svgrepo.com/show/362035/visa-3.svg" height={60} alt="" />
            <Link color={"primary"}>Targetas Visa de débito</Link>
        </div>
    </Card.Body>
  </Card>
    </div>
  
  )
}
