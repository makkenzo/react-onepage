import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';

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
        </>
    );
}

export default App;
