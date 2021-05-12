import React from 'react'
import './Faq.css';
import {Card,Row,Col,Container,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AiFillFlag} from "react-icons/ai";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FcSalesPerformance} from "react-icons/fc";
import { ImBook} from "react-icons/im";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function Faq() {

    const classes = useStyles();
    
    return (
        <>
        <div>
         <img src="https://c0.wallpaperflare.com/preview/738/915/609/faq-answers-help-questions.jpg" id="faqimg" alt="" />  
        </div>
        
        
        
        <section id="section5">
         <Container>
           <Row>
           <Col lg="6">
             <h3 id="faqhd">FAQ</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary" id="typfaq">FAQ</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>
        


         <Container>
          <Row>
            <Col lg="3">
            <Card id="faqcard">
            <Card.Body>
            <AiFillFlag id="faqicon"/>
            <Card.Title>Getting Started</Card.Title>
            </Card.Body>
            </Card>
            </Col>
            
            <Col lg="3">
            <Card id="faqcard">
            <Card.Body>
              < RiMoneyDollarBoxFill id="faqicon"/>
            <Card.Title>Pricing & Plans</Card.Title>
            </Card.Body>
            </Card>
            </Col>
            
            <Col lg="3">
            <Card id="faqcard">
            <Card.Body>
            <FcSalesPerformance id="faqicon"/>
            <Card.Title>Sales Question</Card.Title>
            </Card.Body>
            </Card>
            </Col>
            
            <Col lg="3">
            <Card id="faqcard">
            <Card.Body>
              <ImBook id="faqicon"/>
            <Card.Title>User Guide</Card.Title>
            </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>




        <Container>
        <div className={classes.root}>
      <Accordion id="accr">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What shipping methods are available ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      
      </Accordion>
      <Accordion  id="accr">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What are shipping times and costs ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  id="accr">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What payment methods can I use ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  id="accr">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Can I use my own domain name ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  id="accr">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What kind of customer service do you offer ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       
      
    </div>
    </Container>
        </>
    )
}
