import Button from '../components/elements/Button';
import Heading from '../components/fragments/Heading';
import Input from '../components/fragments/Input';
import TextArea from '../components/fragments/TextArea';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="contact-heading">
        <Heading title="Contact Me"></Heading>
      </div>
      <div className="contact-input">
        <Input title="Name :" type="text" placeholder="Your Name" />
        <Input title="Email :" type="email" placeholder="example12@gmail.com" />
        <TextArea title="Message :" placeholder="Your Message"></TextArea>
        <div className="contact-submit">
          <button type="submit">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
