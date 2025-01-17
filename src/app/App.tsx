import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import  HomePage  from './screens/homePage';
import  ProductsPage  from './screens/productsPage';
import  OrdersPage  from './screens/ordersPage';
import  UsersPage  from './screens/userPage';
import  HelpPage  from './screens/helpPage/index';
import  HomeNavbar  from './components/headers/HomeNavbar';
import  OtherNavbar  from './components/headers/OtherNavbar';
import  Footer  from './components/footer';
import '../css/app.css';
import "../css/navbar.css"; 
import "../css/footer.css";




function App() { 
  const location = useLocation(); //react router domning hooki object return qiladi
  // console.log("loction: ",location.pathname);

  return (
  <>
    {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
    <Switch>
      <Route path="/product">
        <ProductsPage />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/member-page">
        <UsersPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer /> 
  </>
  );
}


export default App;
