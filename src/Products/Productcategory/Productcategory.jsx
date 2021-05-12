import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCate } from "../../Actions/Product.action";
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Productcategory() {
  const DispatchMethod = useDispatch();
  const ProductCategory = useSelector((state) => state.Productdata);
  console.log(ProductCategory);
  useEffect(() => {
    DispatchMethod(ProductCate());
  },[DispatchMethod]);
  
  return (
    <div>
        <Container>
          <Row>
      {ProductCategory.AllCategories.map((e) => (
        
        <Col>
        <Card >
        <Card.Img variant="top"/>
        <Card.Body>
          <Card.Title id="cardtitle3">{e}</Card.Title>
           
          <Link to={`/Categorydetails/${e}`}>
          <Button id="prdtcatbtn" variant="primary">Click here</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
          
      ))}
      </Row>
        </Container>
    </div>
  );
}
