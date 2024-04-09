import CardProject from '../components/fragments/CardProject';
import Heading from '../components/fragments/Heading';
import './MyProjects.css';
import Gambar1 from '../img/restaurant.png';
import Gambar2 from '../img/headphone.png';
import Gambar3 from '../img/company.png';
import Gambar4 from '../img/japan.png';
import Gambar5 from '../img/komick.png';

const MyProjects = () => {
  return (
    <section id="my-projects">
      <Heading title="My Projects" />
      <div className="container-projects">
        <a href="https://lans2008.github.io/Restaurant/">
          <CardProject image={Gambar1}>Project 1</CardProject>
        </a>
        <a href="https://lans2008.github.io/Headphone/">
          <CardProject image={Gambar2}>Project 2</CardProject>
        </a>
        <a href="https://lans2008.github.io/Company/">
          <CardProject image={Gambar3}>Project 3</CardProject>
        </a>
        <a href="https://lans2008.github.io/Japan/">
          {' '}
          <CardProject image={Gambar4}>Project 4</CardProject>
        </a>
        <a href="https://lans2008.github.io/Komick/">
          <CardProject image={Gambar5}>Project 5</CardProject>
        </a>
      </div>
      <div className="view-more">
        <p>
          See all my projects, <a href="#">view more</a>
        </p>
      </div>
    </section>
  );
};

export default MyProjects;
