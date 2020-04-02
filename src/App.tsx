import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResetStyle from './theme/reset';
// pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Search from './components/pages/Search';
import Event from './components/pages/Event';
import Profile from './components/pages/Profile';
import MyGoal from './components/pages/MyGoal';
import Plan from './components/pages/Plan';
import Tips from './components/pages/Tips';
import Contact from './components/pages/Contact';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

const App: FC = () => {
  return (
    <>
      <ResetStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* nav */}
          <Route path="/about" exact component={About} />
          <Route path="/search" exact component={Search} />
          <Route path="/event" exact component={Event} />
          <Route path="/mygoal" exact component={MyGoal} />
          <Route path="/plan" exact component={Plan} />
          <Route path="/tips" exact component={Tips} />
          <Route path="/profile" exact component={Profile} />
          {/* show more */}
          <Route path="/contact" exact component={Contact} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
