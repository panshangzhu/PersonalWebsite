import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Work from "./components/Work";
import Life from "./components/Life";
import Programming from "./components/Programming";
import Contact from "./components/Contact";
import Comment from './components/Comment'
import Footer from "./components/Footer";
import Spinner from "react-bootstrap/Spinner";
import styled from 'styled-components';


const Styles = styled.div`
min-width:1200px;
min-height:600px;
`
export default function App() {
  const Navigation = lazy(() => import(`./components/Navigation`));
  return (
    <Styles>
      <Suspense fallback={<Spinner animation="border" />}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/work" component={Work} />
            <Route path="/life" component={Life} />
            <Route path="/programming" component={Programming} />
            <Route path="/contact" component={Contact} />
            <Route path="/comment" component={Comment} />
          </Switch>
        </Router>
        <Footer />
      </Suspense>
    </Styles>
  );
}
