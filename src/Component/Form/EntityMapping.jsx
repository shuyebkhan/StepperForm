import React from "react";

function EntityMapping() {
  return (
    <>
      <div className="form-container">
        <h3 style={{ color: "blue" }}> Entity Mapping</h3>

        <form className="forms">
          <div>
            <input type="text" id="name" name="name"  placeholder="Name"/>
          

            <input type="text" placeholder="Grade" />
          </div>

          <div>
            <input type="email" placeholder="Entity" />
            <input type="text"  placeholder="Section" />
          </div>
        </form>
      </div>
    </>
  );
}

export default EntityMapping;
