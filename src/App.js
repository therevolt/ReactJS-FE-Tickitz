import Home from "./pages/Home";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Movie from "./pages/Movie";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import PageMovie from "./pages/Admin/PageMovie";
import PageEditMovie from "./pages/Admin/PageEditMovie";
import { PrivateRoute, PublicRoute } from "./helper/CustomRoute";
import Verify from "./pages/Verify";
import Ticket from "./pages/Ticket";
import ResetPassword from "./pages/ResetPassword";
import ConfirmReset from "./pages/ConfirmReset";
import PageAddMovie from "./pages/Admin/PageAddMovie";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={true} path="/signup" component={Signup} />
        <PublicRoute restricted={true} path="/signin" component={Signin} />
        <PublicRoute restricted={true} path="/reset" component={ResetPassword} />
        <PublicRoute restricted={true} path="/confirmReset" component={ConfirmReset} />
        <PublicRoute restricted={false} exact path="/" component={Home} />
        <PublicRoute restricted={false} path="/verify" component={Verify} />
        <PublicRoute restricted={false} exact path="/movie/:id" component={Movie} />
        <PublicRoute restricted={false} path="/movies" component={PageMovie} />
        <PublicRoute restricted={false} path="/ticket/:id" component={Ticket} />
        <PublicRoute restricted={false} path="/ticket" component={Ticket} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/movie/edit/:id" component={PageEditMovie} />
        <PrivateRoute path="/admin/movie/add" component={PageAddMovie} />
        <PrivateRoute path="/order/:id" component={Order} />
        <PrivateRoute path="/payment/:id" component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;
