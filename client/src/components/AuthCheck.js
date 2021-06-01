import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// server side = server.js line 72 

function AuthCheck() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('/checkAuthentication')
      .then(res => {
        setLoggedIn(res.data.authenticated);
      })
      .catch((error) => {
        setLoggedIn(false)
    });
  }, []);

  return (
    <div>
      {loggedIn ? (
        <p>Login success</p>
      ) : (
        <div>
            Not logged in!
          <Link to="/signup">
           Signup
          </Link>
          <Link to="/login">
            Foo
          </Link>
        </div>
      )}
    </div>
  );
}

export default AuthCheck;