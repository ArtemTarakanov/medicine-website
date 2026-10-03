import './index.css';
import Header from "./components/Header.tsx";
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
            <div className="hero-section">
                <div className="container">
                    <Header/>
                </div>
                <Hero/>
            </div>

            <div className="container">
                <Steps/>
                <About/>
                <Services/>
                <Online/>
                <Offline/>
                <Response/>
            </div>

            <Footer/>
        </>
    );
}

export default App;
