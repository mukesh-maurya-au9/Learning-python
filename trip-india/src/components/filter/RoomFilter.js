import React, { Component } from 'react';
import axios from 'axios';

const rURL = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component {
    FilterRoom = (event)=> {
        let roomNumber = event.target.value;
        let tripId = sessionStorage.getItem('tripid');
        let roomURL;
        if(roomNumber == ""){
            roomURL = `${rURL}/${tripId}`
        }else{
            roomURL = `${rURL}/${tripId}?roomtype=${roomNumber}`
        }
        axios.get(roomURL)
        .then((response) => {this.props.hotelPerRoom(response.data)})        
    }
                                        
    render(){
        return(
            <React.Fragment>
                <div>
                    <center className="radio"> Room Filter</center>
                </div>
                <div onChange={this.FilterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="radio"/> All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="radio"/> Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="radio"/> Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="radio"/> Trevel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="radio"/> Semi-deluxe Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
};

export default RoomFilter;