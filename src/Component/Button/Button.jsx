import "./Button.css";

function Button({handleOnClick,isDisabled,children,formId,type}) {
  return (
    
    <button
    className={ isDisabled ? "btn1": "btn2"}
    onClick={handleOnClick}
    disabled={isDisabled}
     form={formId}
     type={type}
   >
    {children}
  </button>
  );
}

export default Button;
