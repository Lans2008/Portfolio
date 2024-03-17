import './Button.css';

const Button = (props) => {
  const { children } = props;
  return (
    <div className="button">
      <button>{children}</button>
    </div>
  );
};

export default Button;
