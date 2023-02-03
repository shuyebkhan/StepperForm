import React from "react";

function Summery() {
  return (
    <>
      <div className="form-container">
        <h3 style={{ color: "blue" }}>Summery</h3>

        <form className="forms">
          <div>
            <input type="text" id="name" name="name" placeholder="Name" />
         

            <input type="text" placeholder="Grade" />
          </div>

          <div>
            <input type="email" placeholder="Summary" />
            <input type="text" placeholder="Section" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Summery;
