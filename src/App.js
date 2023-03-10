import "./App.css";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import Button from "./Component/Button/Button";
import Form from "./Component/Form/Form";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  function handleNext() {
    setActive(active + 1);
  }

  function handleBack() {
    setActive(active - 1);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar data={active} />
        <Form file={active} handleNext={handleNext} />
      </div>

      <div className="btn-container">
        <Button handleOnClick={handleBack} isDisabled={active === 0} >
          Prev
        </Button>
        <Button
          // handleOnClick={handleNext}
          isDisabled={active === 4}
          formId="formOne"
          type="submit"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default App;
