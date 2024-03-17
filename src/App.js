import './App.css';
import Navbar from './components/fragments/Navbar';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import LandingPage from './pages/LandingPage';
import MyProjects from './pages/MyProjects';
import Footer from './pages/Footer'

function App() {
  return (
    <div className="container">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
