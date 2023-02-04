import {User} from '@nextui-org/react'
import { useGlobalState } from './GlobalState'

export default function ItemDepositar({image, text, price, wallet, coin, coins}) {

const wallet_value = useGlobalState(state => state.wallet)
const wallet_change = useGlobalState(state => state.wallet_change)
const coin_change = useGlobalState(state => state.coin_change)
const coins_change = useGlobalState(state => state.coins_change)

  const handleClick = () => {
    wallet_change(wallet)
    coin_change(coin)
    coins_change(coins)
  }

  return (
   <>
    <div>
        <div onClick={handleClick} className='item-container'>
     
        <User className='image-depositar'
            
            as="button"
            size="lg"
           
            name={text}
            description={price}
            src={image}
          />
       
    
        </div>
    </div>
   </>
  )
}
