import './App.css'
import Nav from '../src/Components/Nav/Nav'
import Card from './Components/Card'
import Pay from './Components/Pay'
import Pay_2 from './Components/Pay_2'
import Pay_3 from './Components/Pay_3'
import Collapse from './Components/Collapse'

function App() {

  return (
  <>
  <Nav/>
    <Card/>
    <Pay/>
    <Pay_2/>
    <Pay_3/>
    <Collapse/>
    <p className='p-copy'>Todos los derechos reservados © 2023 </p>
    </>
  )
}

export default App