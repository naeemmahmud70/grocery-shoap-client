import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Error from './components/Home/Error/Error';
import Login from './components/Home/Login/Login';
import Order from './components/Home/Order/Order';
import Admin from './components/Home/Admin/Admin';
import Header from './components/Home/Header/Header';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="container">
      <Router>
      <div>
      <Header></Header>
      </div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/product/:id">
           <Product></Product>
          </Route>

          <Route path="/order">
            <Order></Order>
          </Route>

          <Route path="/admin">
            <Admin></Admin>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
