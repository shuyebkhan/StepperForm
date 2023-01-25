function Form() {
  return (
    <>
      <div className="form-container">
        <h1 style={{ color: "blue" }}>Import File</h1>
        <form className="forms">
          <div>
            <input type="text" id="name" name="name" />

            <label for="name" className="input-label">
              Select Name
            </label>
            <input type="text" placeholder="Grade" />
          </div>

          <div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Section" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
