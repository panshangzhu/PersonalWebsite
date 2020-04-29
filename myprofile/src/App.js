import React from "react";
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
import styled from "styled-components";
import Navigation from "./components/Navigation";

const Styles = styled.div`
  
  .spinner-border{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
  }
  .bottomMargin{
    margin-bottom:15px;
  }
`;

// function Loading({ error }) {
//   if (error) {
//     return "oh! Cannot Loading!";
//   } else {
//     return <Spinner animation="border" variant="secondary"/>;
//   }
// }
// const Home = Loadable({
//   loader: () => import("./components/Home"),
//   loading: Loading
// });
// const Education = Loadable({
//   loader: () => import("./components/Education"),
//   loading: Loading
// });
// const Work = Loadable({
//   loader: () => import("./components/Work"),
//   loading: Loading
// });
// const Life = Loadable({
//   loader: () => import("./components/Life"),
//   loading: Loading
// });
// const Programming = Loadable({
//   loader: () => import("./components/Programming"),
//   loading: Loading
// });
// const Contact = Loadable({
//   loader: () => import("./components/Contact"),
//   loading: Loading
// });
// const Comment = Loadable({
//   loader: () => import("./components/Comment"),
//   loading: Loading
// });

export default function App() {
  return (
    <Styles>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/education" component={Education} />
          <Route path="/work" component={Work} />
          <Route path="/life" component={Life} />
          <Route path="/programming" component={Programming} />
          <Route path="/contact" component={Contact} />
          <Route path="/comments" component={Comment} />
        </Switch>
      </Router>
      <div className="bottomMargin"></div>
      <Footer />
    </Styles>
  );
}
