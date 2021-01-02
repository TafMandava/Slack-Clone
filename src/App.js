import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      {/*
          Router handles all the page routing
      */}
      <Router>
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
        </Router>
    </div>
  );
}

export default App;
