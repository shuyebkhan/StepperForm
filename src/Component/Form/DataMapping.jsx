import React from "react";

function DataMapping() {
  return (
    <>
      <div className="form-container">
        <h3 style={{ color: "blue" }}>Data Mapping</h3>

        <form className="forms">
          <div>
            <input type="text" id="name" name="name" placeholder="Name"/>
          

            <input type="text" placeholder="Grade" />
          </div>

          <div>
            <input type="email" placeholder="DataMapping" />
            <input type="text" placeholder="DataMapping"/>
          </div>
        </form>
      </div>
    </>
  );
}

export default DataMapping;
