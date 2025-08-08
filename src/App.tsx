import { LanguageProvider } from "./utils/context/LanguageProvider";

import { Header } from "./components/features/Header";
import { Hero } from "./components/features/Hero";
import { ButtonConfig } from "./components/ui/ButtonConfig";
import { Footer } from "./components/features/Footer";
import { Contact } from "./components/features/Contact";
import { Proyect } from "./components/features/Proyect/Proyect";
import { AboutMe } from "./components/features/About/About";

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
