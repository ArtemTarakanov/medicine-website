import './index.css';
import Header from "./components/Header.tsx";
import BackgroundEffects from "./components/BackgroundEffects.tsx";
import Hero from "./components/Hero.tsx";
import Steps from "./components/Steps.tsx";
import About from "./components/About";
import Services from "./components/Services.tsx";
import Online from "./components/Online";
import Offline from "./components/Offline";
import Response from "./components/Response";
import Footer from "./components/Footer.tsx";

function App() {
  return (
      <>
          <BackgroundEffects/>
          <div className="container">
              <Header/>
              <Hero/>
              <Steps/>
              <About/>
              <Services/>
              <Online/>
              <Offline/>
              <Response/>
              <Footer/>
          </div>
      </>
  );
}

export default App
