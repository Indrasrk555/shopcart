import { CropPortrait } from '@material-ui/icons';
import React from 'react'
import {Col,Image,Row,Carousel,Container,Card,Button} from 'react-bootstrap';
import './Home.css';

export default function Home() {
    return (
        <div>
            
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1051747/pexels-photo-1051747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
      
    />
    <Carousel.Caption>
    <h3 className="carouheading1"> India's biggest sale is live now </h3>
      <p className="caroupara1">HURRRYY UPP !!!</p>
      <p className="caroupara1">Shop and grab the opportunity to win exciting prizes & cashbacks.</p>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/5710153/pexels-photo-5710153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="carouheading2">Enjoy great cashback offers </h3>
      <p className="caroupara">Make fashion more & more exciting with our choices.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://trekbible.com/wp-content/uploads/2018/03/JBL-Flip-45.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3 className="carouheading3"> Best deals on wireless speakers...</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Container className="covidadd">
   <Row>
     <Col lg="6">
   
    <img
      className="d-block s-100"
      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/thank-you-5039902_960_720_1200x768.jpeg?o6eGR7L325PAXSSyvaZxlUa8SdpYmNRy&size=770:433"     
    />
 
    </Col>
    <Col lg="6">
    <img
      className="d-block s-101"
      src="https://468square.com/wp-content/uploads/2020/12/group-4.png"
      
    />
    </Col>
   </Row>
   </Container>


   <Container className="deal">
    <img
      id=" t-100"
      src="https://hotdealszone.com/wp-content/uploads/2016/03/Amazon-Holi-Steal-Deals.png"
      alt="Third slide"
    />
   </Container>

     <section id="hmebelw">
     <h1 id="bstprdcts">Our best products</h1> 
     <img
      id="prdcts"
      src="https://i.pinimg.com/originals/9f/ff/06/9fff068b7f1f6fd97d70991de01adb5f.png"
      alt=""
    />
     </section>










            


        </div>
    )
}
