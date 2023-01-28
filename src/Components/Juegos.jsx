import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function Juegos() {
  const list = [
    {
      title: "Crash",
      img: "https://bc.imgix.net/game/image/f76d3f4a-9712-4bd1-9426-f3ab7069b6a2.png?auto=format&q=80&dpr=1&w=200",
      price: "$5.50",
    },
    {
      title: "Dados",
      img: "https://bc.imgix.net/game/image/5b3a4099-9462-4d3c-a854-ade78aad0d60.png?auto=format&q=80&dpr=1&w=200",
      price: "$3.00",
    },
    {
      title: "Limbo",
      img: "https://bc.imgix.net/game/image/ff0b0511-1f48-43d1-8dd3-294bb6437b4b.png?auto=format&q=80&dpr=1&w=200",
      price: "$10.00",
    },
    {
      title: "Hash Dice",
      img: "https://bc.imgix.net/game/image/d480b6bc-954b-458b-9bac-27b627ad027d.png?auto=format&q=80&dpr=1&w=200",
      price: "$5.30",
    }
  
  ];


  return (
    <div>
 <Grid.Container gap={1} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>

    </div>
   
  );
}
