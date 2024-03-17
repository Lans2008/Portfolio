import './Footer.css';
import Gambar6 from '../img/facebook.png';
import Gambar7 from '../img/instagram.png';
import Gambar8 from '../img/google-plus.png';
import Gambar9 from '../img/linkedin.png';
import Gambar10 from '../img/tik-tok.png';

const Footer = () => {
  return (
    <footer>
      <div className="head">
        <div className="footer-content">
          <h1>Footer Content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
        <div className="link-1">
          <h1>Link 1</h1>
          <p>Link 1</p>
          <p>Link 2</p>
          <p> Link 3</p>
        </div>
        <div className="link-2">
          <h1>Link 2</h1>
          <p>Link 1</p>
          <p>Link 2</p>
          <p> Link 3</p>
        </div>
      </div>
      <div className="body">
        <a href="#">
          <img src={Gambar6} alt="Facebook" />
        </a>
        <a href="#">
          <img src={Gambar7} alt="Instagram" />
        </a>
        <a href="#">
          <img src={Gambar8} alt="Google" />
        </a>
        <a href="#">
          <img src={Gambar9} alt="Linkedin" />
        </a>
        <a href="#">
          <img src={Gambar10} alt="Tiktok" />
        </a>
      </div>
      <div className="footer">
        <p>Copyright © By Muhamad Maulana 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
