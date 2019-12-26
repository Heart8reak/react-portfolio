import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>

                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p></p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Jonathan Doe</span><br />
                                        <span>1600 Amphitheatre Parkway<br />
                                            Mountain View, CA 94043 US
                  </span><br />
                                        <span>(123)456-7890</span><br />
                                        <span>anyone@website.com</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <a className="button" href="../../../assets/online_resume_092019.pdf" download>
                                        <i className="fa fa-download" />
                                        Download Resume
                                    </a>
                                    {/* <a href="#" className="button"><i className="fa fa-download" download />Download Resume</a> */}
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment >
        )
    }
}