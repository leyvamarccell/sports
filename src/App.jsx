import './App.css'
import Nav from '../src/Components/Nav/Nav'
import Juegos from './Components/Juegos'
import {Cards} from './Components/Card'

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
  

</div>
    </>

  )
}

export default App
