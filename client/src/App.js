import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Container from "./components/Container";
//import NavTabs from "./components/NavTabs";
import Navbar from "./components/Navbar";
import NavbarOut from "./components/NavbarOut";
import NavTabs from "./components/NavTabs";
import Authentication from "./components/Authentication";
// set up persisting logged in user 
import axios from "axios";


import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Dashboard from "./Pages/Dashboard";
import MyCampaign from "./Pages/MyCampaign";
import Send from "./Pages/Send"
import Profile from "./Pages/Profile"
import Footer from "./components/Footer";
//import About from "./pages/About";
//import Blog from "./pages/Blog";
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Switch>
      <div className="">
        <body class="flex flex-col min-h-screen">{/* keep this for sticky footer */}
        <main class="">{/* keep flex-auto for sticky footer */}
       
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/my-campaign" component={MyCampaign} />
        <Route exact path="/send" component={Send} />
        </main>
        </body>
      </div>

      </Switch>
      
    </Router>
  );
}

export default App;
