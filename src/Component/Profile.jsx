import React from 'react'
import { Card,Container,Row,Col,Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';


export default function Profile() {
    const user=(localStorage.getItem("full_name"))
    const user1=(localStorage.getItem("email"))
    
    return (
        <div>
            <section id="">
         <Container>
           <Row>
           <Col lg="6">
             <h3>Welcome to your profile</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">About Us</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>



           <div class="padding">
    <div class="col-md-8">
       
        <div class="card"> <img class="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap"/>
            <div class="card-body little-profile text-center">
                <div class="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user"/></div>
                {
          localStorage.getItem("full_name")?
          <>
    <Card.Title>  User Name:{user}    </Card.Title>
    <Card.Text>
              User Email:{user1}
    </Card.Text>
    </>
    : 
    null
         }
                
            </div>
        </div>
    </div>
</div>
        </div>
    )
}
