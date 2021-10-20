import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';

import Contact from './component/Contact/Contact';
import { NotFound } from 'http-errors';
import Footer from './component/Footer/Footer';
import Specialist from './component/Specialist/Specialist';
import Appoinment from './component/Appoinment/Appoinment';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          {/* Home page  */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>

          </Route>
          {/* About page  */}
          <Route exact path="/about">
            <About></About>

          </Route>
          {/* specialist page */}

          <Route path="/specialist">
            <Specialist></Specialist>
          </Route>

          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>

          {/* contact page  */}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          {/* <Route exact path="/login">
            <Login></Login>

          </Route> */}

          {/* notfound page  */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer> </Footer>
      </Router>

    </div >
  );
}

export default App;
