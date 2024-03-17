import './CardProject.css';
const CardProject = (props) => {
  const { children,image } = props;
  return (
    <div className='abc'>
      <div className="card-img">
        <p>{children}</p>
        <img src={image} alt="Project-1" />
      </div>
    </div>
  );
};

export default CardProject;
