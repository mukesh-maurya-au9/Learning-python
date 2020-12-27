import React, { Component } from 'react';
import axios from 'axios';
import DisplayBookings from './displayBooking';

const dummyURL = "http://localhost:3001/bookings"

class ViewBookings extends Component {
    constructor() {
        super();
        this.state = { 
            booking: ""
         }
    }
    render() { 
        return (
            <div className="container">
                <DisplayBookings bookedData={this.state.booking}/>
            </div>
        );
    }

    async componentDidMount() {
        const response = await axios.get(dummyURL);
        this.setState({booking:response.data})
    }
}
 
export default ViewBookings;