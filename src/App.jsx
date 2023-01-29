import './App.css'
import Nav from '../src/Components/Nav/Nav'
import Juegos from './Components/Juegos'
import {Cards} from './Components/Card'
import ApuestaSport from './Components/ApuestaSport'

function App() {

  return (
    <>
<Nav/>

<div>
<div>
  <Cards/>

</div>
  <div>
    <Juegos/>
   
  </div>
  <div>
    <ApuestaSport/>
    <ApuestaSport/>
  </div>
</div>
    </>

  )
}

export default App
