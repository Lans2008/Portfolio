import './TextArea.css';

const TextArea = (props) => {
  const { title, placeholder } = props;
  return (
    <div className="container-textarea">
      <div className="text-title">
        <p>{title}</p>
      </div>
      <div className="text-area">
        <textarea name="abg" id="abg" placeholder={placeholder}></textarea>
      </div>
    </div>
  );
};

export default TextArea;
