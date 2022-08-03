import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Booking from "./Pages/Booking/Booking";
import About from "./Pages/Home/About/About";
import AddServices from "./Pages/Home/AddServices/AddServices";
import Admin from "./Pages/Home/Admin/Admin";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import MessangerChart from "./Pages/Home/MessangerChart/MessangerChart";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/booking/:service_id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/service">
              <Services></Services>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
          </Switch>
          <MessangerChart />
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
