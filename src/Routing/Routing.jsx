import React from "react";
import Login from "../Auth/Login";
import Home from '../Component/Home';
import Registration from "../Auth/Registration";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Profile from "../Component/Profile";
import Categorydetails from "../Products/Categorydetails/Categorydetails";
import Productcategory from '../Products/Productcategory/Productcategory';
import Productdetails from '../Products/Productdetails/Productdetails';
import About from '../Component/About';
import Help from '../Component/Help';
import Service from '../Component/Service';
import Faq from '../Component/Faq';
import Protectedroute from '../Routing/Protectedroute';
import Cart from "../Products/Cart/CartDetails";
import Checkout from '../Component/Orderpage/Checkout';
import AddressForm from '../Component/Orderpage/AddressForm';
import PaymentForm from '../Component/Orderpage/PaymentForm';
import Review from '../Component/Orderpage/Review';
import Contact from '../Component/Contact';

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/Home" component={Home} />
        <Route exact path="/">
                <Redirect to ="/Home"/>
        </Route>
          <Route path="/Login" component={Login} />
          <Route path="/Help" component={Help} />
          <Route path="/About" component={About} />
          <Route path="/Service" component={Service} />
          <Route path="/Faq" component={Faq} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Protectedroute" component={Protectedroute} />
          <Route path="/Productcategory" component={Productcategory} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/AddressForm" component={AddressForm} />
          <Route path="/PaymentForm" component={PaymentForm} />
          <Route path="/Review" component={Review} />
          <Route path="/Categorydetails/:cname" component={Categorydetails} />
          <Route path="/Productdetails/:pname" component={Productdetails} />
          <Route exact path='/Cart' component={Cart}/>
          <Route exact path='/Contact' component={Contact}/>
          <Protectedroute path="/Profile" component={Profile} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
