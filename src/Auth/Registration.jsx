import React  from 'react'
import './Registration.css';
import { useState }  from 'react'
import { Container, Row,Col,Carousel,Image} from 'react-bootstrap';
 import { useHistory } from "react-router-dom";
 import Icon from '@material-ui/core/Icon';
 import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from "react-redux";
import { signup } from "../Actions/Auth.Action";
import { Link } from "react-router-dom";

import { useFormik } from 'formik';
import * as yup from 'yup';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


const validationSchema = yup.object({
    firstname: yup
    .string('Enter your Firstname')
    .required(' Fristname is required'),
    lastname: yup
    .string('Enter your Lastname')
    .required('Lastname is required'),
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    });

  function Registration1() {
  const history = useHistory();
   const logout = () => {
   history.push("/Login");
  
  }



    const dispatchMethod = useDispatch();
   
    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        firstname:'',
        lastname:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        console.log("values",values);
        // alert(JSON.stringify(values, null, 2));
        dispatchMethod(signup(values));
        },
        });
        
        return (
        <div className="div2">
          <Container>
            <Row className="bg1">
              <Col  ml="6">
        <form onSubmit={formik.handleSubmit} id="full3">
          <h2>Register</h2>
        <TextField
        
        id="firstname"
        name="firstname"
        label="Firstname"
        value={formik.values.firstname}
        onChange={formik.handleChange}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.touched.firstname && formik.errors.firstname}
        className="input1"
        />
        <TextField
        
        id="lastname"
        name="lastname"
        label="Lastname"
        value={formik.values.lastname}
        onChange={formik.handleChange}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        helperText={formik.touched.lastname && formik.errors.lastname}
        className="input1"
        />
        <TextField
        
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        autoComplete='off'
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        className="input1"
        />
        <TextField
       
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        className="input1"
        />
        
        <Button color="primary" fullWidth variant="contained"  type="submit"  id="button2">
        Submit
        </Button>
        <p className="forgot-password text-right">
           Allready Registered <Link as={Link} to='/Login' >Log in?</Link>
      </p> 
         
        </form>
        </Col>

        <Col ml="6">
            <Image src="https://image.freepik.com/free-vector/girlfriends-shopping-flat-color-faceless-characters-shopaholic-girls-stress-reliever-hobby-clothes-emporium-isolated-cartoon-illustration-web-graphic-design-animation_151150-2782.jpg" rounded />
            </Col>
        </Row>
        </Container>
       </div>
       
       
        );
        };
        
        export default Registration1