// import './App.css';
// import Particles from "react-tsparticles";
import { Header } from "./layout/Header/Header";
import { Footer } from "./layout/footer/Footer";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import SlideShow from "./layout/sections/slideShow/SlideShow";
import { Slogan } from "./layout/sections/slogan/Slogan";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Works } from "./layout/sections/works/Works";
import { ParticleEffect } from "./components/particlesEffect/ParticleEffect";

function App() {
  return (
    <div className="App">
      <ParticleEffect />
      <Header />
      <Main />
      {/* <SlideShow /> */}
      <Skills />
      <Works />
      <Testimony />
      <Contacts />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;
