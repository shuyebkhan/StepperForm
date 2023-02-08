import { useForm } from "react-hook-form";

export function DataMapping({ formID, handleNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleNext();
  };

  return (
    <>
      <div className="form-container">
        <h3 style={{ color: "blue" ,marginLeft:"1.7rem"}}>DataMapping</h3>
        <form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
          id={formID}
          key={formID}
        >
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter Your Name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <h6
              style={{ color: "red", marginLeft: "1.6rem", fontSize: "15px" }}
            >
              Name is required.
            </h6>
          )}
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <h6
              style={{ color: "red", marginLeft: "1.6rem", fontSize: "15px" }}
            >
              Email is required.
            </h6>
          )}
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Your DataMapping"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <h6
              style={{ color: "red", marginLeft: "1.6rem", fontSize: "15px" }}
            >
              Number is required.
            </h6>
          )}
          <br />

          <input
            type="password"
            id="passowrd"
            name="password"
            placeholder="Enter Your Passowrd"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <h6
              style={{ color: "red", marginLeft: "1.6rem", fontSize: "15px" }}
            >
              Password is required.
            </h6>
          )}
          <br />
        </form>
      </div>
    </>
  );
}

