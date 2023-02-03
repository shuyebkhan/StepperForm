import "./Button.css";

function Button({handleOnClick,isDisabled,children,formId}) {
  return (
    
    <button
    className={ isDisabled ? "btn1": "btn2"}
    onClick={handleOnClick}
    disabled={isDisabled}
     form={formId}
   >
    {children}
  </button>
  );
}

export default Button;
