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
                            <p>Proficient with React Javascript. Currently focusing on developing user interface (UI) components. Translating designs and wireframes into high quality code, and optimzing components for maximum performance across a vast array of web-capable devices and browsers.</p>
                            <div className="row">
                                <div className="columns contact-details">

                                </div>
                                <div className="download">
                                    <a className="button" href="../../assets/online_resume_092019.pdf" download>
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