import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a href="https://twitter.com/carlos_baez1223" target="_blank"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://github.com/Heart8reak" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://www.instagram.com/baez_1223/" target="_blank"><i className="fa fa-instagram" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>&copy; 2020 Carlos L Baez</li>
                                <li>Designed with <i class="fa fa-heart"></i></li>
                                <li>
                                    <a title="Styleshout" href="http://www.styleshout.com/" target="_blank">
                                        Styleshout
                                        </a>
                                </li>
                            </ul>
                        </div>
                        <div id="go-top">
                            <a className="smoothscroll" title="Back to Top" href="#home">
                                <i className="icon-up-open"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}