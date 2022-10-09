import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

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
            <div className="features">
                <Container>
                    <FeaturesSection />
                </Container>
            </div>
        </>
    );
}

export default App;
