import './App.css'
import Nav from '../src/Components/Nav/Nav'
import Juegos from './Components/Juegos'
import {Cards} from './Components/Card'
import ApuestaSport from './Components/ApuestaSport'
import { db } from './Components/firebase'
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { userEmail, userName } from './Components/Auth'
import {useGlobalState} from '../src/Components/GlobalState'
import { SignOut, SignInWithLink } from './Components/Auth'
import { useState } from 'react'

function App() {

const saldo = useGlobalState(state => state.value)

const [value, setValue] = useState({})

let a = `${userEmail}`
//Delete this
const addUsers = () => {
addDoc(collection(db, a), {
    name: userName,
    email: userEmail,
    saldo: 0
  }).then(res => console.log(res))
}


getDocs(collection(db, a))
.then(res => res.forEach(data =>  setValue(data.data())))

console.log(value)

const html = value.saldo

  return (
    <>
<Nav/>

<button onClick={SignOut}>Cerrrar</button>
<h1>{saldo}</h1>
<div>
{html}
</div>
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
  <button>Crear base de datos</button>
  <button onClick={addUsers}>Get data</button>
</div>
    </>

  )
}

export default App