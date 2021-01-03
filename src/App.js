import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  /*
      We want the user at a global level
      There we need to use React Context API or Redux and push data in a Data Layer (StateProvider)
      Alternative to and better than Prop drilling 

      const [user, setUser] = useState(null);

      We have a state but we destructure it to get the user
      const [state, dispatch] = useStateValue();

      The value of the user in the initialState should be null so that the App redirects the user to a Sign-in Page
  */
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/*
          Router handles all the page routing
      */}
      <Router>
        
        {!user ? (
          <Login />
        ) : (
          
          /*
              Sometimes you can't have two siblings next to each other
              You have to wrap it inside something called a fragment
              This is more like an empty div
          */

          <>
            {/* Header */}
            <Header />
            {/* Body */}
            <div className="app__body"> 
              {/* Sidebar */}
              <Sidebar />

              {/* 
                  We always want to show the header 
                  Use a Switch to check the route that we are in
                  Based on the route that you are in, the switch that we are in
                  And based on the route that we are in we wil render the appropriate screen
              */}
              <Switch>
                {/*
                    http://localhost:3000/room/abc
                */}
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                {/*
                    http://localhost:3000/
                */}
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>                     
              </Switch>

              {/* React Router <<<>>> Chat Screen */}
            </div>
          </>
        )}

        </Router>
    </div>
  );
}

export default App;
