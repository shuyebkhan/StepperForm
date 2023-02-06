import { DataMapping } from "./DataMapping";
import EntityMapping from "./EntityMapping";
import { Import } from "./Import";
import Summery from "./Summery";

function Form(props) {
  let formData = [
    <Import formID="formOne" handleNext={props.handleNext} />,
    <DataMapping formID="formOne" handleNext={props.handleNext} />,
    <EntityMapping formID="formOne" handleNext={props.handleNext} />,
    <Summery formID="formOne" handleNext={props.handleNext} />,
  ];

  return (
    <>
      <div className="form-container">
        <h1>{formData[props.file]}</h1>
      </div>
    </>
  );
}

export default Form;
