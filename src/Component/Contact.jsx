// import { Carousel,Row,Col,Container,Button } from '@material-ui/core';
import {Carousel,Row,Col,Container,Button} from "react-bootstrap";
import React from 'react'
import './Contact.css';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Contact() {
    return (
        <>
            <div>
           <img src="https://images.pexels.com/photos/7035860/pexels-photo-7035860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="cnctimg" alt="" />
        </div>
        
        <section id="section2">
         <Container>
           <Row>
           <Col lg="6">
             <h3 id="cntct">CONTACT US</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary" id="typcntct">Contact Us</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

        <Container>
            <Row>
                <Col lg="6">
                    <div className="hth">
                <h2 className="hppy">Here To Help</h2>
                <p id="h">Have a question? You may find an answer in our FAQs. But you can also contact us.</p>
                <p id="h">Location: Wonder Street, USA, New York</p>
                <p id="h">Call Us: +1-541-754-3010</p>
                <p id="h">Email Us: hello@livani.com</p>
                <p id="h">Fax: +123456789</p> 
                </div>

                <div className="oh">
                <h2 className="hppy">Opening Hours:</h2>
                <p id="h">Monday: 8AM - 6AM</p>
                <p id="h">Tuesday: 8AM - 6AM</p>
                <p id="h">Wednesday: 8AM - 6AM</p>
                <p id="h">Thursday - Friday: 8AM - 6AM</p>
                <p id="h">Sunday: Closed</p> 
                </div>

                <div className="fu">
                <h2 className="hppy">Follow Us:</h2>
                <p>
                <TiSocialFacebookCircular id="cncticon"/>
                <TiSocialInstagramCircular id="cncticon"/>
                <TiSocialYoutube id="cncticon"/>
                <TiSocialPinterestCircular id="cncticon"/>
                <TiSocialTwitter id="cncticon" />
                <TiSocialLinkedinCircular id="cncticon"/>
                </p>
                </div>
                </Col>
                
                <Col lg="6">
                <div className="dual">
                    <h2 className="hppy">Drop Us A Line</h2>
                    <p id="h">We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>       
               
                </div>
                
                <div className="frm">
                    <label className="lbl">NAME* : </label>
                    <input type="text" name="fullname" className="cnctip" placeholder="Enter Your Name" />
                    <br/>
                    <label className="lbl">EMAIL* : </label>
                    <input type="email" name="email" className="cnctip" placeholder="Enter Email Address" />
                    <br/>
                    <label className="lbl">PHONE NUMBER * : </label>
                    <input type="number" name="mobile" className="cnctip" placeholder="Enter your phone number"/>
                    <br/>
                    <label className="lbl">YOUR MESSAGE * : </label>
                    <input type="subject" name="message" className="cnctip" placeholder="Enter Your Message Here"/>
                    <br/>
                    <button id="cnctbtn"> SEND MESSAGE </button>
                </div>
                </Col>
            </Row>
        </Container>


        </>
    )
}
