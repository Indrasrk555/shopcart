import React from 'react'
import './Service.css';
import {Carousel,Row,Col,Container,Button} from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { GiCardExchange } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function Service() {
    return (
        <>
        <div>
           <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" id="servcimg" alt="" />
        </div>
        
        <section id="section1">
         <Container>
           <Row>
           <Col lg="6">
             <h3 id="svc">SERVICES</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary" id="typsvc">Service</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>
        
        <Container>
           <div className="ship">
              
            <h3 className="svchdng"><FaShippingFast />   Shipping Times and Costs</h3>
            <p id="s">Complimentary ground shipping within 1 to 7 business days</p>
            <p id="s">In-store collection available within 1 to 7 business days</p>
            <p id="s">Next-day and Express delivery options also available</p>
            <p id="s">Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</p>
            </div>
        </Container>

        <Container>
           <div className="pay">
           <h3 className="svchdng"><MdPayment/>  Payment Methods</h3>
           <p id="s">Xton accepts the following payment methods:</p>
           <p id="s">Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</p>
           <p id="s">Xton features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</p>
           <p id="s">PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</p>
           </div>
       </Container>

       
       <Container>
           <div className="return">
           <h3 className="svchdng"> <GiCardExchange/>  Exchanges, Returns and Refunds</h3>
           <p id="s">Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable</p>
           </div>
       </Container>

        </>
    )
}
