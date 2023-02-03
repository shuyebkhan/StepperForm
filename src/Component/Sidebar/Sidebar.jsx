import { Stepper, Step, StepLabel } from "@mui/material";

function Sidebar(props) {
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
                  Import file
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
