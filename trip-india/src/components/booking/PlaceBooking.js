import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const bookinguRL = "http://localhost:3001/bookings";

class PlaceBooking extends Component {
    constructor() {
        super()

        this.state = {
            id: Math.floor(Math.random() * 1000),
            hotel_name: sessionStorage.getItem('hotelName'),
            Customer_Name: "",
            Phone_Number: '',
            status:'Pending'
        }
    }

    handleChangeName = (e) => {
        this.setState({ Customer_Name: e.target.value })
    };

    handleChangePhone = (e) => {
        this.setState({ Phone_Number: e.target.value })
    };

    handleSubmit = (e) => {
        fetch((bookinguRL),{
            method:'POST',
            headers:{
                'Accept':"application/json",
                'Content-Type':"application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.history.push("/ViewBookings"))
    }



    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Booking for Hotel {this.state.hotel_name}</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_Id:</label>
                            <input type="text" name="order_id" value={this.state.id} readOnly className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hotel_Name</label>
                            <input type="text" name="order_id" value={this.state.hotel_name} readOnly className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="order_id" value={this.state.Customer_Name} onChange={this.handleChangeName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="number" name="order_id" value={this.state.phone} onChange={this.handleChangePhone} className="form-control" />
                        </div>
                        <Link to={`/details/${sessionStorage.getItem('tripid')}`} className="btn btn-danger">Cancel</Link> &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>
        )
    }
};
export default PlaceBooking;