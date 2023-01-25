import "./Button.css";

function Button(props) {
  return (
    <>
      <div className="btn">
        <button
          className="btn1"
          onClick={props.decrement}
          disabled={props.data === 0}
        >
          Prev
        </button>
        <button
          className="btn2"
          onClick={props.increment}
          disabled={props.data === 3}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Button;
