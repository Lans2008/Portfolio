import Button from '../components/elements/Button';
import './LandingPage.css';
import Gambar from '../img/Maulana.png';

const LandingPage = () => {
  return (
    <section id='home'>
      <aside className="aside">
        <h1>Welcome To My Portfolio</h1>
        <p>Introducing myself, my name is Muhamad Maulana, I am a Front-End Developer programmer.</p>
        <Button className="button-landing">Contact Me</Button>
      </aside>
      <main className="main">
        <div className="figure">
          <img src={Gambar} alt="Maulana" />
        </div>
      </main>
    </section>
  );
};

export default LandingPage;
