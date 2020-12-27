import React from 'react';

const DisplayBookings = (props)=>{
    const renderTable = ({bookedData})=>{
        if (bookedData){
            return bookedData.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.Customer_Name}</td>
                        <td>{item.Phone_Number}</td>
                        <td>{item.status}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>Booking</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Hotel Name</th>
                        <th>User Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )

};
export default DisplayBookings;