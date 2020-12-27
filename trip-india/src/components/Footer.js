import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <hr/>
            <footer>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5>Company name</h5>
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.</p>
                </div>
                
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5>Products</h5>
                    <p><a href="#!">MDBootstrap</a></p>
                    <p><a href="#!">MDWordPress</a></p>
                    <p><a href="#!">BrandFlow</a></p>
                    <p><a href="#!">Bootstrap Angular</a></p>
                </div>
                
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5>Useful links</h5>
                    <p><a href="#!">Your Account</a></p>
                    <p><a href="#!">Become an Affiliate</a></p>
                    <p><a href="#!">Shipping Rates</a></p>
                    <p><a href="#!">Help</a></p>
                </div>
                
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5> CONTACT</h5>
                    <p><i className="fas fa-home mr-3"></i> Gorakhpur </p>
                    <p><i className="fas fa-envelope mr-3"></i> info@tripindia.com</p>
                    <p><i className="fas fa-phone mr-3"></i> +91 7777000010 </p>
                    <p><i className="fas fa-print mr-3"></i> +91 7777000011 </p>
                </div>

                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left">2020:
                            <a href="https://mdbootstrap.com/">
                                <strong> &copy; Trip-India </strong>
                            </a>
                        </p>
                    </div>
                </div>   
            </footer>
        </Fragment>
    )
};
export default Footer;