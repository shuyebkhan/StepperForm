// function Form(props) {
//   let arr = ["Import file", "Data Mapping", "Entity Mapping", "Summary"];



//   let formData = [
//     <>
//       <input
//         id="first-name"
//         label="First Name"
//         variant="outlined"
//         placeholder="Enter Your First Name"
//         fullWidth
//         margin="normal"
//         name="firstName"
//       />
//       <input
//         id="last-name"
//         label="Last Name"
//         variant="outlined"
//         placeholder="Enter Your Last Name"
//         fullWidth
//         margin="normal"
//         name="lastName"
//       />
//       <input
//         id="nick-name"
//         label="Nick Name"
//         variant="outlined"
//         placeholder="Enter Your Nick Name"
//         fullWidth
//         margin="normal"
//         name="nickName"
//       />

//       <input
//         id="full-name"
//          label="Full Name"
//          placeholder="Enter Your Full Name"
//          fullWidth
//          margin="normal"
//          name="fulname"
//       />
//     </>,

//     <>
//       <input
//         id="email"
//         label="E-mail"
//         variant="outlined"
//         placeholder="Enter Your E-mail Address"
//         fullWidth
//         margin="normal"
//         name="emailAddress"
//       />
//       <input
//         id="phone-number"
//         label="Phone Number"
//         variant="outlined"
//         placeholder="Enter Your Phone Number"
//         fullWidth
//         margin="normal"
//         name="phoneNumber"
//       />
//       <input
//         id="alternate-phone"
//         label="Alternate Phone"
//         variant="outlined"
//         placeholder="Enter Your Alternate Phone"
//         fullWidth
//         margin="normal"
//         name="alternatePhone"
//       />

//      <input
//         id="personal-number"
//         label="Personal number"
//         variant="outlined"
//         placeholder="Enter Your Personal Phone"
//         fullWidth
//         margin="normal"
//         name="alternatePhone"
//       />
//     </>,

//     <>
//       <input
//         id="address1"
//         label="Address 1"
//         variant="outlined"
//         placeholder="Enter Your Address 1"
//         fullWidth
//         margin="normal"
//         name="address1"
//       />
//       <input
//         id="address2"
//         label="Address 2"
//         variant="outlined"
//         placeholder="Enter Your Address 2"
//         fullWidth
//         margin="normal"
//         name="address2"
//       />
//       <input
//         id="City"
//         label="City"
//         variant="outlined"
//         placeholder="Enter Your City Name"
//         fullWidth
//         margin="normal"
//         name="City"
//       />
         
//          <input
//         id="country"
//         label="country"
//         variant="outlined"
//         placeholder="Enter Your City Name"
//         fullWidth
//         margin="normal"
//         name="country"
//       />

      
//     </>,

//     <>
//       <input
//         id="cardNumber"
//         label="Card Number"
//         variant="outlined"
//         placeholder="Enter Your Card Number"
//         fullWidth
//         margin="normal"
//         name="cardNumber"
//       />
//       <input
//         id="cardMonth"
//         label="Card Month"
//         variant="outlined"
//         placeholder="Enter Your Card Month"
//         fullWidth
//         margin="normal"
//         name="cardMonth"
//       />
//       <input type="text"
//         id="cardYear"
//         label="Card Year"
//         variant="outlined"
//         placeholder="Enter Your Card Year"
//         fullWidth
//         margin="normal"
//         name="cardYear"
//       />

    
//     </>,
//   ];


//   return (
//     <>
//       <div className="form-container">
//         <h1 style={{ color: "blue" }}>{arr[props.file]}</h1>
//         <form className="forms">{formData[props.file]}
//         </form>
//       </div>
//     </>
//   );
// }

// export default Form;


import DataMapping from "./DataMapping";
import EntityMapping from "./EntityMapping";
import Import from "./Import";
import Summery from "./Summery";


function Form(props){

  let formData=[
      <Import/>,
      <DataMapping/>,
      <EntityMapping/>,
      <Summery/>
  ];
     
   return(
     <>
             <div className="form-container">
                   <h1 style={{color:"blue"}}>{formData[props.file]}</h1>
             </div>
     </>
   )
};


export default Form;



       