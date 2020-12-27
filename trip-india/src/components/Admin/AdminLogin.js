import React, { Component } from 'react';
import AdminPanel from './AdminPanel';

const adminURL = "http://localhost:3001/userdata";

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            role:'Admin',
            error:''
         }
    }

    handleAdminEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleAdminPassword = (event) => {
        this.setState({password:event.target.value})
    }
    handleAdminRole = (event) =>{
        this.setState({role:event.target.value})
    }
    
    handleSubmit =() => {
        fetch(adminURL,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data){
                // this.props.history.push("/AdminPanel")
                return(
                    <AdminPanel userdata={this.state.users}/>
                )
            }

            // sessionStorage.setItem('_ltk',data.token);
            // this.props.history.push('/profile')
        })
        .catch((err) => {
            this.setState({error:"Invalid UserName or Password"})
        })
    }

    render() { 
        return (
            <React.Fragment>
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                    <h4>Administration Login</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="email" name="order_id" value={this.state.email} className="form-control"
                            onChange={this.handleAdminEmail}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input type="password" name="order_id" value={this.state.password} className="form-control"
                            onChange={this.handleAdminPassword}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Role</label>
                            <input type="Text" name="order_id" value={this.state.role} className="form-control"
                            onChange={this.handleAdminRole} readOnly/>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                    </div>
                </div>            
            </div>
    
                <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                </div>  
            </React.Fragment> 
      );
    }
}
 
export default AdminLogin;