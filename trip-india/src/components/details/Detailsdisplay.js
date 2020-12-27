import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Details extends Component {
    constructor() {
        super()

        this.state = {
            hotel: "",
            tripId: sessionStorage.getItem("tripid")
        }
    }
    render() {
        let{hotel} = this.state
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-md-11">
                                <h3>{hotel.name}</h3>
                            </div>
                            <div className="col-md-1">
                                <Link to={`/list/${this.state.tripId}`} className="btn btn-info">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className="col-md-12">
                                <Slider {...settings}>
                                    <div>
                                        <img src={hotel.thumb} className="img-responsive" alt="" 
                                        style={{height:400, width:1000}}/>
                                    </div>
                                    <div>
                                        <img style={{height:400, width:1000}} src="https://images.unsplash.com/photo-1495754149474-e54c07932677?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://i.pinimg.com/236x/33/5d/b7/335db7729e42ebc8de809d997b1c269c.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://i.pinimg.com/236x/02/94/6e/02946e1a86fe4d44a659c11c1456c250.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img src="https://i.pinimg.com/236x/0c/75/f0/0c75f054627c64b50bca3cf1bfa81113.jpg" alt="" />
                                    </div>
                                    <hr />
                                </Slider>                               
                                <div>
                                    <Tabs>
                                        <TabList>
                                            <Tab>Adress</Tab>
                                            <Tab>Cost</Tab>
                                            <Tab>Amenities</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <h2>{hotel.locality}</h2>
                                            <h2>{hotel.address}</h2>
                                        </TabPanel>
                                        <TabPanel>
                                            <h2>{`Per Night Cost of Rs. ${hotel.cost}`}</h2>
                                        </TabPanel>
                                        <TabPanel>
                                            <h2>{hotel.name}</h2>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                                <hr />
                                <div>
                                    <Link to={`/booking/${hotel._id}`} className="btn btn-success">Place Booking</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        var hotalid = this.props.match.params.id;
        const response = await axios.get(`${url}/${hotalid}`)
        this.setState({hotel:response.data[0]})
        sessionStorage.setItem("hotelName",this.state.hotel.name)
    }
};
export default Details;