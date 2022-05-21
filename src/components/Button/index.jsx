const Button = ({ type, style, text }) => {
  return (
    <button type={type || "button"} className={`btn btn__${style}`}>
      {text || "Click"}
    </button>
  );
};

export default Button;
