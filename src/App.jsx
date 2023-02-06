import './App.css'
import Nav from '../src/Components/Nav/Nav'
import SaldoInfo from './Components/SaldoInfo'
import Servicios from './Components/Servicios'
import Precios from './Components/Precios'
import Footer from './Components/Footer'
import Drop from './Components/DropDown'

function App() {

  return (
    <>
<Nav/>
<Drop/>
<div>
  <SaldoInfo/>
</div>

<div>
  <Servicios image='https://static-heavenex.fra1.digitaloceanspaces.com/static/src/img/icon_security.png' text='Seguridad' text_2='La plataforma tiene una estructura en capas que la protege de riesgos. Usted también puede activar el doble factor y mantener su cuenta doblemente protegida. Contamos con un sistema que le protege durante sus transacciones. Utilice HeavenEx y dígale adiós a los estafadores.'/>
  <Servicios image='https://static-heavenex.fra1.digitaloceanspaces.com/static/src/img/icon_adaptability.png' text='Adaptabilidad' text_2='HeavenEx se adapta a todo dispositivo, ofreciéndole la posibilidad de disfrutar de la plataforma en cualquier momento y desde cualquier lugar.'/>
  <Servicios image='https://static-heavenex.fra1.digitaloceanspaces.com/static/src/img/icon_users.png' text='Usuarios' text_2='Brindamos la posibilidad de permanecer en el anonimato. Su información personal está segura con nosotros.'/>
  
</div>

<div>
  <Precios/>
 
</div>
<Footer/>
    </>

  )
}

export default App