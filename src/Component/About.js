import React from 'react'
import './About.css';
import {Col,Row,Carousel,Container,Button} from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  

export default function About() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

    return (
        <>
        <section id="section3">
         <Container>
           <Row>
           <Col lg="6">
             <h3 id="abtus">ABOUT US</h3>
           </Col>
           <Col lg="6">
           <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" as={Link} to='/Home'  id="linkheadC">
        Home
      </Link>
     
      <Typography color="textPrimary" id="typabt">About Us</Typography>
    </Breadcrumbs>
           </Col>

           </Row>
         </Container>
         </section>



           <Container>
            <Row>
                <Col lg="6">
                <div className="topimg">
                <img src="https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="abtimg" alt="" />
                </div>
                </Col>
                
                
                <Col lg="6">
                    <div className="writting">
                     <h2 id="wrldsbst">The most trusted online shopping platform in the world</h2>
                     <br/>
                     <br/>
                     <p id="abtpg"><b>ShopCart.com offers you flexible and responsive shopping experience.</b></p>
                     <p id="abtpg">Shopcart is an e-commerce website which features millions of products, i.e. clothes, shoes, bags, electronic items and much more, with all at incredible prices.</p>
                     <p id="abtpg">One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>   

                    <div>
                        <h4 id="tencntry">Ships to more than 10 countries and regions</h4>
                        <p id="abtpg">We provide customers with a hassle-free and worry-free international shopping experience from buying to delivery.</p>
                    </div>
                </Col>
            </Row>    
           </Container>

          
           <Container className="our">
               <Row>
                <Col lg="4">
                    <h3 id="abthd">Our Stories</h3>
                    <p id="abtpg1">One of the most popular on the web is shopping.</p>
                    <p id="abtpg1"><TiTick/>People like Livani</p>
                    <p id="abtpg1"><TiTick/>World's finest Livani</p>
                    <p id="abtpg1"><TiTick/>The original Livani</p>
                    <p id="abtpg1"><TiTick/>We trust Livani</p>
                    
                </Col>
                <Col lg="4">
                <h3 id="abthd">Our Values</h3>
                <p id="abtpg1">The best of both worlds. Store and web.</p>
                <p id="abtpg1"><TiTick/>Always in style!</p>
                <p id="abtpg1"><TiTick/>Discover your favorite shopping</p>
                <p id="abtpg1"><TiTick/>Find yourself</p>
                <p id="abtpg1"><TiTick/>Feel-good shopping</p>
                </Col>
                <Col lg="4">
                <h3 id="abthd">Our Promise</h3>
                    <p id="abtpg1">Rediscover a great shopping tradition.</p>
                    <p id="abtpg1"><TiTick/>Get better shopping</p>
                    <p id="abtpg1"><TiTick/>Love shopping again</p>
                    <p id="abtpg1"><TiTick/>Online shopping.</p>
                    <p id="abtpg1"><TiTick/>Shopping for all seasons</p>
                </Col>
               </Row>
           </Container>


           <Container className="clients">
               <h1 id="clnt">What Clients say about us ?</h1>
               <Row>
                <Col lg="4">
                <Card className={classes.root} id="abtcard">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Steffan Marco"
        subheader="September 4, 2018"
      />
      <CardMedia
        className={classes.media}
        image="https://d1qq9lwf5ow8iz.cloudfront.net/live-images-1/ImageDetail_17f09ec4-b586-4e8c-91e9-2ae95b8d1b6e_Large"
        title="Client1"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
                </Col>
                <Col lg="4">
                <Card className={classes.root} id="abtcard">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Jojilla Fernandez"
        subheader="January 20, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://i.insider.com/5d8e606b2e22af7c686fa92b?width=1136&format=jpeg"
        title="Client2"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
                </Col>
                <Col lg="4">
                <Card className={classes.root}  id="abtcard">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Rayan Parag"
        subheader="April 27, 2019"
      />
      <CardMedia
        className={classes.media}
        image="https://img.etimg.com/thumb/msid-71502766,width-1200,height-900,imgsize-182365,overlay-etmarkets/photo.jpg"
        title="Client3"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
                </Col>
               </Row>
           </Container>
        </>
    )
}
