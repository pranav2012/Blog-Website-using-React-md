import React from 'react';
import '../Styles/App.scss';
import Header from './Header';
import Footer from './Footer';
import Blogfield from './Blogfield';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Blogfield />
            <Footer />
          </Route>
          <Route exact path="/Admin">
          </Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
