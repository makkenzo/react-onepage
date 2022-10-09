import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AnalysisSection from './components/AnalysisSection';
import TechnologySection from './components/TechnologySection';
import SpeedAndSecuritySection from './components/SpeedAndSecuritySection';
import DarkModeSection from './components/DarkModeSection';

import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
    return (
        <>
            <div className="need-to-shadow">
                <Container>
                    <NavigationBar />
                </Container>
            </div>
            <Container className="hero-container">
                <HeroSection />
            </Container>
            <div id="features">
                <Container>
                    <FeaturesSection />
                </Container>
            </div>
            <div id="analysis">
                <Container>
                    <AnalysisSection />
                </Container>
            </div>
            <div id="technology">
                <Container>
                    <TechnologySection />
                </Container>
            </div>
            <div id="security">
                <Container>
                    <SpeedAndSecuritySection />
                </Container>
            </div>
            <div id="dark">
                <Container>
                    <DarkModeSection />
                </Container>
            </div>
        </>
    );
}

export default App;
