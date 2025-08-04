import { LanguageProvider } from "./utils/context/LanguageProvider";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ButtonConfig } from "./components/ButtonConfig";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Proyect } from "./components/Proyect/Proyect";
import { AboutMe } from "./components/About/About";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <ButtonConfig />
      <Proyect />
      <AboutMe />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}

export default App;
