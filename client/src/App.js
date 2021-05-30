import React from 'react';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       <body class="flex flex-col min-h-screen">{/* keep this for sticky footer */}
        <Navbar />
      </body>
    </div>
  );
}

export default App;

