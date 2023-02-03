import React from "react";


 
 function Import(){
     return(
        <>
            <div className="form-container">
            <h3 style={{color:"blue"}}>Import File</h3>

            <form className="forms">
                <div>
                    <input type="text" id="name" name="name" placeholder="Name"/>
                 

                    <input type="text" placeholder="Grade"/>
                </div>

                <div>
                    <input type="email" placeholder="email"/>
                    <input type="text" placeholder="Password" />
                </div>
            </form>

            </div>
        </>
     )
 };

 export default Import;