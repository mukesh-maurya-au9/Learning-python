import React, { Component } from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url = 'https://developerfunnel.herokuapp.com/location';
const hotalURL = "https://developerfunnel.herokuapp.com/hotels?city=";
class Search extends Component {
    constructor() {
        super()
        this.state = {
            location: "",
            hotal: ""
        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            });
        }
    };

    changeHandler = (event) => {
        const hotelKey = event.target.value;
        fetch(`${hotalURL}${hotelKey}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ hotal:data })
            })
            .catch((error) => {
                console.log("Data not Found")
            })
    }


    renderHotal = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleHotel =(event) =>{
        this.props.history.push(`/details/${event.target.value}`)
    }

    render() {
        return (
            <div className="imageContainer">
                <div id="logo">
                    T!
                </div>
                <div className="heading">Plan Your Trip</div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.changeHandler}>
                        <option>---- Select Location ----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>---- Select Hotal ----</option>
                        {this.renderHotal(this.state.hotal)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({ location: data })
            })
            .catch((error) => {
                console.log("Data not Found")
            })
    }
};
export default withRouter(Search);