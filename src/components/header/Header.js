import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Navigation</a>
                        <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide Navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li className="current"><a className="smoothscroll" href="#about">About</a></li>
                            <li className="current"><a className="smoothscroll" href="#work">Work</a></li>
                            <li className="current"><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{resumeData.name}</h1>
                            <h3>I'm a {resumeData.location} based <span>{resumeData.role}</span>, <span>illustrator</span> and <span>webdesigner</span> {resumeData.description}. Let's <a className="smoothscroll" href="#about">start scrolling </a>
                                and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>

                            <hr />
                            <ul className="social">
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        )
    }
}