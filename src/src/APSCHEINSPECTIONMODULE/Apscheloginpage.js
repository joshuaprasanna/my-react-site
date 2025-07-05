import { ErrorMessage, FormikProvider, useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import mainLogo from'./Capture.png';
import * as Yup from "yup";
import { useState } from "react";

export function ApscheLoginPage()
{
    const [username, Setusername] = useState('')

    const [password, Setpassword] = useState('')

   
    const handleEmailChange = event => {
        Setusername(event.target.value)

      };
      const SandleEmailChange = event => {
        Setpassword(event.target.value)

      };
  
     

      const handleSubmit = event => {
        event.preventDefault();
        alert(`Your state values: \n 
        username: ${username} \n 
                You can replace this alert with your process`);
                alert(`Your state values: \n 
                password: ${password} \n 
                        You can replace this alert with your process`);
      };

return(


    <>
    <form onSubmit={handleSubmit}>
            <Col md={2}> <img  src={mainLogo}
          style={{
            marginLeft:"180px",
            marginTop:"250px",
            height:"500px"



          }}
          
          /> 


      
<Col md={8} style={{marginLeft:"1200px",backgroundColor:"rgb(237, 232, 246)",height:"950px",width:"650px",marginTop:"-750px"}}>
<h3 style={{marginLeft:"50px",color:"rgb(144, 108, 214)"}}>APSCHE<br></br>
<b>INSPECTION</b></h3>
<h3 style={{marginTop:"400px",marginLeft:"130px"}}><b>Sign In</b></h3>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<b>Username:</b>&nbsp;<input type="text"onChange={handleEmailChange} placeholder="Enter username" value={username}></input>

<br></br>
<br></br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;

&nbsp;<b>Password:</b>&nbsp;<input type="password" onChange={SandleEmailChange} placeholder="Enter password"  value={password}></input>

<br></br><br></br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<button type="submit" className="btn btn-info" >
        Sign In 
      </button>
</Col>
</Col>

    </form>
    
    
    </>
)


}