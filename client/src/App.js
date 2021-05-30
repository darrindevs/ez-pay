import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Components 
import Navbar from "./components/Navbar";
import Component1 from './components/UserList';
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <body class="flex flex-col min-h-screen">{/* keep this for sticky footer */}
        <Navbar />
          <Route path="/" exact component={UserList} />
          <Route path="/user" component={CreateUser} />
          <Component1 />
        </body>
    </div>
    </Router>
    
  );
}

export default App;

