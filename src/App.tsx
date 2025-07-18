import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import { Proyect } from "./components/Proyect/Proyect";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Proyect />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}

export default App
