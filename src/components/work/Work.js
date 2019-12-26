import React, { Component } from 'react';


export default class Work extends Component {
    render() {
        let workData = this.props.workData;
        return (
            <React.Fragment>
                <section id="work">
                    {/* Work
      ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">

                            {workData.map((work, index) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{work.company}</h3>
                                            <h5>{work.location}</h5>
                                            <p className="info">{work.position}<span> • </span> <em className="date">{work.date}</em></p>
                                            <p>{work.description0}</p>
                                            <p>{work.description1}</p>
                                            <p>{work.description2}</p>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
      ----------------------------------------------- */}
                </section> {/* Resume Section End*/}
            </React.Fragment>
        )
    }
}