import { Outlet } from "react-router-dom"
import { Header } from "./components/Home/Header"

function App() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
