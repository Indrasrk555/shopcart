import React, { useState } from "react";
import './Navbar.css';
import logo from './logo.png'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { AiOutlineLogin } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

console.log(logo);

export default function Header() {
  const user = localStorage.getItem("full_name");

   const { totalqty } = useSelector((state) => state.cartData);

  const history = useHistory();
  const HomeD = () => {
    history.push("/Home");
  };
  const ProductD = () => {
    history.push("/Registration");
  };
  const ProductDi = () => {
    history.push("/Login");
  };
  const Productp = () => {
    history.push("/Profile");
  };
  const ProductDfaq = () => {
    history.push("/Faq");
  };
  const ProductCAt = () => {
    history.push("/Productcategory");
  };
  const Productservice = () => {
    history.push("/Service");
  };
  const Productcontactus = () => {
    history.push("/Contact");
  };
  const myprofile = () => {
    history.push("/Profile");
  };
  const aboutus = () => {
    history.push("/About");
  };
  const cart = () => {
    history.push("/Cart");
  };

  //  logout
  const dispatchMethod = useDispatch();
  const logout = () => {
    window.localStorage.clear();
    history.push("/Home");
  };
  const notify = () => {
    toast.success('Logout Successfull', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const classess = useStyles();
  const [open1, setOpenn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <div className={classes.root}>
          <CssBaseline id="appdrawer" />

          <Drawer open={open1} onClose={() => setOpenn(false)}>
            <List disablePadding className={classes.drawer}>
              {localStorage.getItem("token") ? (
                <>
                  <ListItem button id="listitemheaderL">
                    <AiOutlineLogin />{" "}
                    <ListItemText onClick={Productp} primary={user} />
                  </ListItem>
                </>
              ) : (
                <ListItem button id="listitemheaderL">
                  <AiOutlineLogin id="usricon" />{" "}
                  <ListItemText onClick={ProductDi} primary=" User/SignIn" id="userlogin" />
                </ListItem>
              )}

              <hr />
              {/* <ListItem button  id="listitemheaderA" onClick={ProductCAt}>
          <FaProductHunt/>   <ListItemText   primary="Categorydetails"    />

          </ListItem> */}

              <ListItem button id="listitemheaderA" onClick={ProductCAt}>
                <FaShopify id="headricon" /> <ListItemText primary="Shop" id="dwrtxt" />
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={ProductDfaq}>
                <BsFillQuestionSquareFill id="headricon" /> <ListItemText primary="FAQ" id="dwrtxt"/>
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={Productservice}>
                <FaServicestack id="headricon" /> <ListItemText primary="Services" id="dwrtxt"/>
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={Productcontactus}>
                <MdPermContactCalendar id="headricon" /> <ListItemText primary="Contact Us" id="dwrtxt"/>
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={aboutus}>
                <FaAmazon id="headricon" /> <ListItemText primary="About Us" id="dwrtxt"/>
              </ListItem>

              <hr />

              <ListItem button id="listitemheaderA">
                <FaOpencart id="headricon" /> <ListItemText primary="Visit Cart" onClick={cart} id="dwrtxt" />
              </ListItem>

              <ListItem button id="listitemheaderA">
                <AiFillShopping id="headricon" />{" "}
                <ListItemText primary="Your Orders" onClick={cart} id="dwrtxt" />
              </ListItem>

              <ListItem button id="listitemheaderA">
                <ImProfile id="headricon"/>{" "}
                <ListItemText primary="My Profile" onClick={myprofile} id="dwrtxt" />
              </ListItem>
            </List>
          </Drawer>

          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => setOpenn(true)}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Link to="/home">
                <Typography
                  variant="h6"
                  className={classes.title}
                  id="section11"
                >
               {/* Logo space */}
               <img src={logo} id="hdrlogo" alt="Logo" />
               
                </Typography>
              </Link>

              <Typography variant="h6" className={classes.title}></Typography>

              
              <div className={classes.sectionDesktop}>
              <Link to="/Home">
                <Typography
                  variant="h6"
                  className={classes.title}
                  id="hdrcmp"
                >
                 HOME
                </Typography>
              </Link>
              <Link to="/Productcategory">
                <Typography
                  variant="h6"
                  className={classes.title}
                  id="hdrcmp"
                >
                  SHOP
                </Typography>
              </Link>

              <Link to="/About">
                <Typography
                  variant="h6"
                  className={classes.title}
                  id="hdrcmp"
                >
                  ABOUT
                </Typography>
              </Link>

              <Link to="/Contact">
                <Typography
                  variant="h6"
                  className={classes.title}
                  id="hdrcmp"
                >
                  CONTACT
                </Typography>
              </Link>

              <Link to='/Service'>
              <Typography  className={classes.title} id="hdrcmp" >
                     SERVICE
                </Typography>
                </Link> 
              
          
          <Link to='/Faq'>
              <Typography  className={classes.title} id="hdrcmp"   >
                     FAQ
                </Typography>
                </Link> 
                </div>
                
              <div className="nav__right">
                <Link to="/cart">
                  <div className="basket">
                    <FiShoppingCart className="hdrcrticon" />
                    <span>{totalqty}</span> 
                  </div>
                </Link>
              </div>

              {auth && (
                <div>
                  <IconButton
                    // id="hdricnbtn"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    {localStorage.getItem("token") ? (
                      <>
                        <MenuItem onClick={myprofile}>My Profile</MenuItem>
                        <MenuItem
                          onClick={() => {
                            notify();
                            logout();
                          }}
                        >
                          Log out
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem onClick={ProductD}> Register </MenuItem>
                        <MenuItem onClick={ProductDi}> Log in </MenuItem>
                      </>
                    )}
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </>
  );
}