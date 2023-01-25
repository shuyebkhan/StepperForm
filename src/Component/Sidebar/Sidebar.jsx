import { Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";

function Sidebar(props) {
  // const [active, setActive] = useState(0);
   



  return (
    <>
      <div className="mainstep">
        <Stepper activeStep={props.data} orientation="vertical">
          <Step>
            <Step></Step>
            <StepLabel>
              {" "}
              <div className="stepleft">
                <h2 className="head3" style={{ paddingLeft: "3.6rem" }}>
                  import file
                </h2>{" "}
                <h3 className="head4">Browser and Upload</h3>
              </div>{" "}
            </StepLabel>
          </Step>

          <Step>
            <Step></Step>
            <StepLabel>
              {" "}
              <div className="stepleft">
                <h2 className="head3" style={{ paddingLeft: "0.5rem" }}>
                  Data Mapping
                </h2>{" "}
                <h3 className="head4">Select and mapp it</h3>
              </div>
            </StepLabel>
          </Step>

          <Step>
            <Step></Step>
            <StepLabel>
              {" "}
              <div className="stepleft">
                <h2 className="head3" style={{ paddingLeft: "0rem" }}>
                  Entity Mapping
                </h2>{" "}
                <h3 className="head4">Choose the name</h3>
              </div>{" "}
            </StepLabel>
          </Step>

          <Step>
            <Step></Step>
            <StepLabel>
              {" "}
              <div className="stepleft">
                <h2 className="head3" style={{ paddingLeft: "3.3rem" }}>
                  Summery
                </h2>{" "}
                <h3 className="head4">Review and confirm</h3>
              </div>
            </StepLabel>
          </Step>
          <Step></Step>
        </Stepper>
      </div>


     
    </>
  );
}

export default Sidebar;
