import {User} from '@nextui-org/react'

export default function ItemDepositar({image, text, price}) {
  return (
   <>
    <div>
        <div className="item-container">
     
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
