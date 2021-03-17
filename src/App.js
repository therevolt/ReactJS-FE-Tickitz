import Home from "./pages/Home";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Movie from "./pages/Movie";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import DeleteMovie from "./pages/Admin/PageMovie";
import PageEditMovie from "./pages/Admin/PageEditMovie";

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
        <Route exact path="/movie/:id" children={<Movie />} />
        <Route path="/movie/edit/:id" children={<PageEditMovie />} />
        <Route path="/order/:id" children={<Order />} />
        <Route path="/profile" children={<Profile />} />
        <Route path="/movies" children={<DeleteMovie />} />
        <Route path="/payment/:id" children={<Payment />} />
      </Switch>
    </Router>
  );
}

export default App;
