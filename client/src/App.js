import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Container from "./components/Container";
//import NavTabs from "./components/NavTabs";
import Navbar from "./components/Navbar";
import NavTabs from "./components/NavTabs";

import Home from "./Pages/Home";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Dashboard from "./Pages/Dashboard";
import MyCampaign from "./Pages/MyCampaign";
import Footer from "./components/Footer";
//import About from "./pages/About";
//import Blog from "./pages/Blog";
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Switch>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <body class="flex flex-col min-h-screen">{/* keep this for sticky footer */}
        <Navbar />
        <main class="flex-auto mt-10">{/* keep flex-auto for sticky footer */}
        <Route exact path="/" component={Home} />
        <Route exact path="/comp1" component={Comp1} />
        <Route exact path="/comp2" component={Comp2} />
        <Route exact path="/comp3" component={Comp3} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/my-campaign" component={MyCampaign} />
        </main>
        <Footer />
        </body>
      </div>

      </Switch>
      
    </Router>
  );
}

export default App;
