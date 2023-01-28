import './App.css'
import Nav from '../src/Components/Nav/Nav'
import Juegos from './Components/Juegos'
import Info from './Components/Info'

function App() {

  return (
    <>
<Nav/>

<div>

  <div>
    <Juegos/>
   
  </div>
  
  <div>
    <Info text='Obtén una respuesta en menos de 90 segundos de nuestro amable personal de soporte las 24 horas al día, 7 días a la semana.' image='https://www.svgrepo.com/show/491980/hydropower-coal.svg'/>
    <Info text='No cobramos comisiones de retiro. Todo lo que pagas es una pequeña comisión de gas del blockchain.' image='https://www.svgrepo.com/show/491977/financial-management.svg'/>
    <Info text='No te confíes. ¡Verifícalo! Puedes demostrar la imparcialidad de cada apuesta en el blockchain.' image='https://www.svgrepo.com/show/491985/my-account.svg'/>
    
  </div>
</div>
    </>

  )
}

export default App
