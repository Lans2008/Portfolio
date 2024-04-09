import './CardProject.css';
const CardProject = (props) => {
  const { children, image } = props;
  return (
    <div className="card-img">
      {/* <p>{children}</p> */}
      <img src={image} alt="Project-1" />
    </div>
  );
};

export default CardProject;
