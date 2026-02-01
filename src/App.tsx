import './index.css';
import Header from "./components/Header.tsx";
import BackgroundEffects from "./components/BackgroundEffects.tsx";
import Hero from "./components/Hero.tsx";

function App() {
  return (
      <>
          <BackgroundEffects/>
          <div className="container">
              <Header/>
              <Hero/>
          </div>
      </>
  );
}

export default App
