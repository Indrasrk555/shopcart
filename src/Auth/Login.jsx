import React from 'react';
import './Login.css';
import { useState } from 'react';
import { TextField } from '@material-ui/core'; 
import { Container,Col,Row } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {signin} from '../Actions/Auth.Action'

export default function Login() {
    const dispatchMethod = useDispatch();
  const [reg, setReg] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState({})
  
  const validation = (reg) => {
    let error = {}
    if (!reg.email) {
      error.email = "Email is required"
    }
    else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(reg.email)) {
      error.email = "email is invalid"
    }
    if (!reg.password) {
      error.password = "password is required"
    }
    else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(reg.password)) {
      error.password = ' '
    }
    return error;
  }

  const onChangeHandler = (e) => {
    let { name, value } = e.target
    setReg({ ...reg, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setError(validation(reg))
    console.log(reg);
   
    let user = { email: reg.email, password: reg.password }
    console.log(user);
    dispatchMethod(signin(user));
  }



  return (
    <>

      <div className="center">
      
        <Row>
          
          <Col lg="6">
          <div  className="loginimg">
            <img src="https://www.foxpass.com/hs-fs/hubfs/press%20-%20wifi%20icon.jpg?width=598&name=press%20-%20wifi%20icon.jpg" />
            </div>
         </Col>
        
        

         
         <Col lg="6">
         <div className="loginform">
            <h4 className="log_head">Login Here</h4>

            <form onSubmit={submitHandler} noValidate autoComplete="off">
            
                <TextField id="outlined-basic" label="Email Adress" variant="outlined" type="text" name="email" className="text_field2" autoComplete="off" 
                  onChange={onChangeHandler} />
                <p className="error1">{error.email}</p>
              
              
              
              
                <TextField id="outlined-basic" label="Password" variant="outlined" type="Password" name="password" className="text_field2" autoComplete="off"
                  onChange={onChangeHandler} />
                <p className="error1">{error.password}</p>
                
                <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>  
              

              <button className="loginbtn" type='submit'>Login</button>


            </form>
            </div>
            </Col>
            
            
            </Row>
        
      </div>

    </>
  )
}









