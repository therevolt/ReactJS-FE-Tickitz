import Home from "./pages/Home";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Movie from "./pages/Movie";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import PageMovie from "./pages/Admin/PageMovie";
import PageEditMovie from "./pages/Admin/PageEditMovie";
import { PrivateRoute } from "./helper/privateRoute";
import Verify from "./pages/Verify";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/verify" component={Verify} />
        <Route exact path="/movie/:id" children={<Movie />} />
        <Route path="/movies" children={<PageMovie />} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/movie/edit/:id" component={PageEditMovie} />
        <PrivateRoute path="/order/:id" component={Order} />
        <PrivateRoute path="/payment/:id" component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;
