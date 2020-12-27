import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const AdminPanel = (props) => {
  const renderList = ({ userdata }) => {
    if (userdata) {
      return userdata.map((item, index) => {
        return (
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
          </tr>
        );
      });
    }
  };

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
        })}
    }

    return (
        <div>
        <Tabs>
            <TabList>
                <Tab>Users Details</Tab>
                <Tab>Bookings Details</Tab>
                <Tab>Hotals Details</Tab>
            </TabList>

            <TabPanel> 
                <div className="container">
                    <center>
                        <h2>List Of Users</h2>
                    </center>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                        </thead>
                        <tbody>{renderList(props)}</tbody>
                    </table>
                    <button className="btn btn-success">Add New Admin</button>
                </div>
            </TabPanel>

            <TabPanel>
            <div className="container">
                <center><h3>Booking Details</h3></center>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Hotel Name</th>
                            <th>User Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <button style={{background:'yellow'}}>Conform-Booking</button>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable(props)}
                    </tbody>
                </table>
            </div>
            </TabPanel>
            <TabPanel>
                {/* <h2>{hotel.name}</h2>
                <h2>{hotel.cost}</h2> */}

            </TabPanel>
        </Tabs>
    </div>
    );
};

export default AdminPanel;
