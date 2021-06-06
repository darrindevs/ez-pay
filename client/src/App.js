// dependencies 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";

// pages
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Profile from "./Pages/Profile";
import Payments from "./Pages/Payments";
import Notifications from "./Pages/Notifications";
import Settings from "./Pages/Settings";
import PaymentProfile from "./Pages/PaymentProfile";
//import EditProfile from "./Pages/EditProfile";
//import Payments from "./Pages/Payments";
//import Settings from "./Pages/Settings";

// components 
import Navbar from "./components/Navbar";
//import NavbarIn from "./components/NavbarIn";
import NavbarOut from "./components/NavbarOut";
import Authentication from "./components/Authentication";
import ProfileComponent from "./components/ProfileComponent";
import Footer from "./components/Footer";

//import Container from "./components/Container";
//import NavTabs from "./components/NavTabs";


function App() {
  return (
    <Router>
      <Switch>
      <div className="">
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/profile" component={Profile} />
        <Route exact path="/account/payments" component={Payments} />
        <Route exact path="/account/notifications" component={Payments} />
        <Route exact path="/account/settings" component={Payments} />
        <Route exact path="/logout" component={Home} />
      </div>
      </Switch>
      
    </Router>
  );
}

export default App;
