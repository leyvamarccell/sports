import { Route, Routes, BrowserRouter } from "react-router-dom"
import Retirar from '../src/Components/Retirar'
import App from "./App"
import Depositar from "./Components/Depositar"

export default function Rutas() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App/>}></Route>
            <Route path="/retirar" element={<Retirar/>}></Route>
            <Route path="/depositar" element={<Depositar/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
