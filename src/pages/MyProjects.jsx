import CardProject from '../components/fragments/CardProject';
import Heading from '../components/fragments/Heading';
import './MyProjects.css';
import Gambar1 from '../img/Mountain - Copy.jpg';
import Gambar2 from '../img/Product.jpg';
import Gambar3 from '../img/Computer.jpg';
import Gambar4 from '../img/Comic.jpg';
import Gambar5 from '../img/Headphone.jpg';

const MyProjects = () => {
  return (
    <section id="my-projects">
      <Heading title="My Projects" />
      <div className="container-projects">
        <CardProject image={Gambar1}>Project 1</CardProject>
        <CardProject image={Gambar2}>Project 2</CardProject>
        <CardProject image={Gambar3}>Project 3</CardProject>
        <CardProject image={Gambar4}>Project 4</CardProject>
        <CardProject image={Gambar5}>Project 5</CardProject>
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
