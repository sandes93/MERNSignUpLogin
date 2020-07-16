import React, { Component } from "react";


class BrandDescription extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center p-0 m-0">
                <div className="row m-0 p-0">
                    <div className="cardBackground card col-md-9 col-xs-12">
                        <div className="card-body">
                            <h5 className="card-title">About Company</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed velit quam. Donec interdum tellus in lacinia convallis. Fusce rutrum ut libero et euismod. Phasellus sed laoreet magna. Nullam eget urna nisl. Mauris ut placerat lacus. Vivamus dictum rutrum auctor. Fusce libero felis, efficitur nec eleifend vitae, pharetra eget dolor. Vestibulum imperdiet ante sed lorem auctor sodales. Aliquam id varius mi. Morbi pulvinar nunc at odio venenatis, in tincidunt massa luctus. Nullam eu pellentesque mi, id convallis orci. Proin id quam et eros venenatis gravida nec quis lectus. Nullam congue nisl et odio euismod commodo. Pellentesque porttitor imperdiet dolor.

Maecenas at mollis mauris. Vivamus ultricies pretium purus, vitae mollis ex interdum sed. Mauris porta tristique augue, eu interdum felis vestibulum ac. Proin tincidunt tincidunt ultrices. Pellentesque blandit maximus mi, eu aliquet mauris sagittis sed. Quisque eu consequat lacus. Praesent vestibulum sollicitudin diam non eleifend. Aliquam efficitur nisi sed risus rhoncus rhoncus. Morbi ultricies nunc eget nunc iaculis bibendum. Phasellus in ante sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tristique nunc semper nisi varius, ut pretium mauris dapibus. Quisque scelerisque vel dui non vestibulum.</p>
                        </div>
                    </div>

                    <div className="cardBackground card col-md-3 col-xs-12 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Follow Us!</h5>
                            <a href="/">
                                <span className="fa-stack facebookLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack twitterLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack instagramLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack linkedinLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack googleLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-google fa-stack-1x"></i>
                                </span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandDescription;