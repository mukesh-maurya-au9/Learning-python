import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filter/RoomFilter';

const url = 'https://developerfunnel.herokuapp.com/hotellist';

class ListingAPI extends Component {
    constructor() {
        super()
        this.state = {
            hotelData: ''
        }
    }

    setDataPerFilter(sortedData) {
        this.setState({ hotelData: sortedData })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter hotelPerRoom={(data) => { this.setDataPerFilter(data) }} />
                </div>
                <div className="col-md-2">
                    <ListingDisplay hotelList={this.state.hotelData} />
                </div>
            </div>
        )
    }
    componentDidMount() {
        var tripid = this.props.match.params.id;
        sessionStorage.setItem("tripid", tripid)
        axios.get(`${url}/${tripid}`)
            .then((response) => this.setState({ hotelData: response.data }))

    }
};
export default ListingAPI;