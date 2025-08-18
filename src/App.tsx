import { LanguageProvider } from "./utils/context/LanguageProvider";

import { Header } from "./components/features/Header";
import { Hero } from "./components/features/Hero";
import { ButtonConfig } from "./components/ui/ButtonConfig";
import { LinesSVG } from "./components/ui/LinesSVG";
import { Proyect } from "./components/features/Proyect/Proyect";
import { AboutMe } from "./components/features/About/About";
import { Contact } from "./components/features/Contact";
import { Footer } from "./components/features/Footer";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <ButtonConfig />
      <LinesSVG />
      <Proyect />
      <AboutMe />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}

export default App;
