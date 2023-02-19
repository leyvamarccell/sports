import { Route, Routes, BrowserRouter } from "react-router-dom"
import App from "./App"

export default function Rutas() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App/>}></Route>
           
        </Routes>
    </BrowserRouter>
  )
}
