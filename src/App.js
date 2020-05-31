import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
// import Layout from "./components/Layout";
import NavigationBar from './components/NavigationBar';
// import Jumbotron from './components/Jumbotron';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        {/* <Jumbotron /> */}
        {/* <Layout> */}
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        {/* </Layout> */}
      </React.Fragment>
    );
  }
}

export default App;