import React, { Component } from 'react';


export default class Education extends Component {
    render() {
        let educationData = this.props.educationData;
        return (
            <React.Fragment>
                <section id="education">

                    <div className="row education">

                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            {educationData.map((education, index) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{education.school}</h3>
                                            <p className="info">{education.major} <span>•</span> <em className="date">{education.grad_year}</em></p>
                                            <p>{education.location}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> {/* main-col end */}
                    </div>


                </section>
            </React.Fragment>
        )
    }
}