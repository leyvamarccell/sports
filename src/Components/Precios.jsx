import { Card, User } from "@nextui-org/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Precios() {

const [coins, setCoins] = useState([])

    const getData = async () => {
        const res = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')
        setCoins(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <>
        <div className="precios-container">
      
            <Card>
                <Card.Body>
                {
                        coins.map(coin => {
                            return(
                                <div className="precios-div">
                                <div>
                                <User src={coin.image} name={coin.symbol}/>
                                
                                </div>
                                <div>
                                    <p className="text-price">$ {coin.current_price}</p>
                                </div>
                                </div>
                               
                            )
                        })
                    }
                     
                </Card.Body>
            </Card>
        </div>
    </>
  )
}
