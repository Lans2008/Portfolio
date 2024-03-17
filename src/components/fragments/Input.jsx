import './Input.css';

const Input = (props) => {
  const { title, type,placeholder } = props;
  return (
    <div className="input-container">
      <div className="input-title">
        <p>{title}</p>
      </div>
      <div className="input">
        <input type={type} placeholder={placeholder}/>
      </div>
    </div>
  );
};

export default Input;
