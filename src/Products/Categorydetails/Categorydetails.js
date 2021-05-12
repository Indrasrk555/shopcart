import React, { useEffect } from "react";
import './Categorydetails.css';
import { useDispatch, useSelector } from "react-redux";
import { subcategory } from "../../Actions/Product.action";
import { Card,Container,Row,Col,Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function Categorydetails({ match }) {
  
  let cdetails = match.params.cname;
  console.log(cdetails);
  const DispatchMethod = useDispatch();
  const ProductCategory = useSelector((state) => state.Productdata);
  console.log(ProductCategory);
  
  useEffect(() => {
    DispatchMethod(subcategory(cdetails));
  }, [DispatchMethod]);
  
  
  return (
    <div>
      <section id="sectionppp1">
         <Container>
           <Row>
           <Col lg="6">
             <h3>{cdetails}</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary">Products</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>

        <Container>
            <Row>
      {ProductCategory.Specific_Categorydat.map((e) => (
          <Col lg="3">
       <Card id="card1">
          <Card.Img id="cardimg" variant="top" src={e.image} />
          <Card.Body>
            <Card.Title id="cardtitle1">{e.title}</Card.Title>
            <Card.Title id="cardtitle2"> Price : ${e.price}</Card.Title>
          </Card.Body>
          <Link to={`/ProductDetails/${e.id}`}>
          <Button variant="primary">Click</Button>
          </Link>
        </Card>
        </Col>
      ))}
      </Row>
      </Container>
    </div>
  );
}