import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import User from "./pages/User";
import UserList from "./pages/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:userId">
            <User />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/products/:userId">
            <Product />
          </Route>
          <Route exact path="/newproducts">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
