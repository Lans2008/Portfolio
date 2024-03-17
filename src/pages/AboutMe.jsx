import Heading from '../components/fragments/Heading';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id='about'>
      <Heading title='About Me' />
      <div className="data">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>
  );
};

export default AboutMe;
