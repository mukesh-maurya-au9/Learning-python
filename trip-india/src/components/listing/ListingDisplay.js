import React from 'react';
import './Listing.css'
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderList = ({ hotelList }) => {
        if (hotelList) {
            if (hotelList.length > 0) {
                return hotelList.map((item) => {
                    return (
                        <React.Fragment >
                            <hr />
                            <div className="item" id={item.id}>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img className="Image" src={item.thumb} />
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="hotel_name">
                                            <Link to={`/details/${item._id}`}>{item.name}</Link></div>
                                        <div className="city_name">{item.city_name}</div>
                                        <div className="address-text">{item.locality}</div>
                                        <div className="address-text">{item.address}</div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="CUISINES-COST-FOR-TWO">Room Type</div>
                                        <div className="CUISINES-COST-FOR-TWO">COST FOR Night</div>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="Bakery-700">
                                            {item.type[0].name},{item.type[1].name},{item.type[2].name}</div>
                                        <div className="Bakery-700">Rs {item.cost}</div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
            return (
                <div>
                    Data
                </div>
            )
        } else {
            return (
                <div>
                    <img alt='image' src="/loader.gif" />
                </div>
            )
        }
    }

    return (
        <div>
            {renderList(props)}
        </div>
    )
};
export default ListingDisplay;