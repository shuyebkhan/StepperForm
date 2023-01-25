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
    <>
      <Header />
      <div className="container">
        <Sidebar data={active} />
        <Form />
      </div>

      <Button increment={handleNext} decrement={handleBack} data={active} />
    </>
  );
}

export default App;
