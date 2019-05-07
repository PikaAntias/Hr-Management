import React, { Component } from 'react';
import './style.css';
import Home from '../home';
import {Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pilar from '../pilar';
import Soal from '../soal';
import {rrfProps, fire} from '../../store';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

    render() {
      console.log(this.props)
        return (
            <div className="site-wrap">

                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <div className="site-navbar-wrap bg-white">
                    <div className="site-navbar-top">
                        <div className="container py-2">
                            <div className="row align-items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-navbar-wrap bg-white">
                    <div className="container">
                        <div className="site-navbar bg-light">
                            <div className="py-1">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <h2 className="site-logo"><Link to={`/home`}>HR <strong>Apprisal System</strong>  </Link></h2>
                                    </div>
                                    <div className="col-9">
                                        <nav className="site-navigation text-right" role="navigation">
                                            <div className="container">
                                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                                                <ul className="site-menu js-clone-nav d-none d-lg-block">

                                                    <li>
                                                        <Link to={`/home`}>Dashboard</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/recapitulation-score`}>Scoring</Link>
                                                    </li>
                                                    <li className="has-children">
                                                        <a href="#">Nama</a>
                                                        <ul className="dropdown arrow-top" onClick={this.logout}>
                                                            <li><p> Logout</p></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Switch>
                <Route component={Pilar} path="/pilar/:pilarid"/>
            <Route component={Soal} path="/soal/:criteriaid/:soalid"/>
            <Route component={Home} />
          </Switch>


            </div>

        );
    }
}

export default Layout;
