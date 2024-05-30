
import { Header } from "./components/HomeSection/Header"
import { Home } from "./routes/Home"
import { Features } from "./routes/Features"
import { Works } from "./routes/Works"
import { About } from "./routes/About"
import { People } from "./routes/People"
import { Feedbacks } from "./routes/Feedbacks"
import { News } from "./routes/News"
import { Contacts } from "./routes/Contacts"

function App() {

  return (
    <div>
      <Header />
      <Home/>
      <Features />
      <Works />
      <About />
      <People />
      <Feedbacks />
      <News />
      <Contacts />

    </div>
  )
}

export default App
