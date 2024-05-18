import { Outlet } from "react-router-dom"
import { Header } from "./components/HomeSection/Header"

function App() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
