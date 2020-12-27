import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ListingAPI from './components/listing/ListingAPI';
import ListingDisplay from './components/listing/ListingDisplay';
import Details from './components/details/Detailsdisplay';
import PlaceBooking from './components/booking/PlaceBooking';
import ViewBookings from './components/booking/viewBooking'; 
import RegisterComponent from './components/login/RegisterComponent';
import LoginComponent from './components/login/LoginComponent';
import ProfileComponent from './components/login/Profile';
import UserList from './components/login/UserList';
import AdminLogin from './components/Admin/AdminLogin';
import AdminPanel from './components/Admin/AdminPanel';

const Routing = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                    <Route path="/register" component={RegisterComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/profile" component={ProfileComponent}/>
                    <Route path="/list" component={UserList}/>

                    <Route path="/AdminLogin" component={AdminLogin}/>
                    <Route path="/AdminPanel" component={AdminPanel}/>

                    <Route path="/" exact component={Home}/>
                    <Route path="/list/:id" component={ListingAPI}/>
                    <Route path="/listing/:id" component={ListingDisplay}/>
                    <Route  path="/details/:id" component={Details}/>
                    <Route  path="/booking/:id" component={PlaceBooking}/>
                    <Route  path="/ViewBookings" component={ViewBookings}/>
                <Footer/>
            </React.Fragment>
        </BrowserRouter>
    ) 
};
export default Routing;