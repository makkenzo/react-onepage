import {
    AnalysisSection,
    NavigationBar,
    HeroSection,
    FeaturesSection,
    TechnologySection,
    SpeedAndSecuritySection,
    DarkModeSection,
    PricingSection,
    TestimonialsSection,
} from './components';

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
            <div id="pricing">
                <Container>
                    <PricingSection />
                </Container>
            </div>
            <div id="testimonials">
                <Container>
                    <TestimonialsSection />
                </Container>
            </div>
        </>
    );
}

export default App;
