import React from 'react';
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import {Container,Row,Col} from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
   
    return (
        <div className="foot">
        
        <Container>
        <Row>
            <Col lg="3">
             <h5 className="foot_head">About</h5>
             <p className="foot_para">Contact Us</p>
             <p className="foot_para">About Us</p>
             <p className="foot_para">Careers</p>
             <p className="foot_para">Shopcart Stories</p>
             <p className="foot_para">Shopcart wholesale</p>
            </Col>
            <Col lg="3">
             <h5 className="foot_head">Help</h5>
             <p className="foot_para">Payments</p>
             <p className="foot_para">Shipping</p>
             <p className="foot_para">Cancellations and Returns</p>
             <p className="foot_para">Report Infridegement</p>
            </Col> 
            <Col lg="3">
             <h5 className="foot_head">Policy</h5>
             <p className="foot_para">Return Policy</p>
             <p className="foot_para">Terms of Use</p>
             <p className="foot_para">Security</p>
             <p className="foot_para">Privacy</p>
            </Col> 
            <Col lg="3">
             <h5 className="foot_head">Mail us</h5>
             <p className="foot_para">Shopcart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India</p>
             
            </Col>    
        </Row>
        </Container>
        
        
        <Container>
        <Row>
        <Col lg="4">
        <p className="designation1">© 2010-2021 ShopCart.com </p>
        </Col> 
        <Col lg="4">
        <TiSocialTwitter id="footicon" data-toggle="tooltip" data-placement="top" title="Twitter"/>
        <TiSocialFacebook id="footicon" data-toggle="tooltip" data-placement="top" title="Facebook"/>
        <TiSocialLinkedin id="footicon" data-toggle="tooltip" data-placement="top" title="Linkedin"/>
        <TiSocialPinterest id="footicon" data-toggle="tooltip" data-placement="top" title="Pinterest"/>
        <TiSocialInstagram id="footicon" data-toggle="tooltip" data-placement="top" title="Instagram"/>







        {/* <img src="https://webershandwickseattle.com/wp-content/uploads/2012/04/Facebook-Icon-grayscale.png" className="imgsize2" data-toggle="tooltip" data-placement="top" title="Facebook" /> 
        <img src="https://icon-library.com/images/white-google-plus-icon/white-google-plus-icon-16.jpg" className="imgsize2" data-toggle="tooltip" data-placement="top" title="Google Plus" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V0nQulwqLvDb9sd6EmcbW9ymZUoUxTztcg&usqp=CAU" className="imgsize2" data-toggle="tooltip" data-placement="top" title="Twitter" />
        <img src="https://www.nicepng.com/png/detail/374-3745383_linkedin-linkedin-logo-grey-png.png" className="imgsize2" data-toggle="tooltip" data-placement="top" title="LinkedIn" /> */}
        </Col>
        <Col lg="4">
        <p className="designation2"> @ Designed by IndraNIL Roy </p>
        </Col>
        </Row>
        </Container>
        </div>
    )
}
