import React, { Component } from 'react';
//import './style.css';
import { Switch, Route } from 'react-router-dom';

class ScoreQueisioner extends Component {
  render(){
    return (
<div>
<div>
        <title>Score Queisioner Admin</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/magnific-popup.css"/>
        <link rel="stylesheet" href="css/jquery-ui.css"/>
        <link rel="stylesheet" href="css/owl.carousel.min.css"/>
        <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
        <link rel="stylesheet" href="css/bootstrap-datepicker.css"/>
        <link rel="stylesheet" href="css/animate.css"/>
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css"/>
        <link rel="stylesheet" href="css/aos.css"/>
        <link rel="stylesheet" href="css/style.css"/>
        <body class="w3-light-grey">

<div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <div class="site-navbar-wrap bg-white">
      <div class="site-navbar-top">
        <div class="container py-2">
          <div class="row align-items-center">
          </div>
        </div>
      </div>
    </div>
<div class="site-navbar-wrap bg-white">
      <div class="container">
        <div class="site-navbar bg-light">
          <div class="py-1">
            <div class="row align-items-center">
              <div class="col-3">
                <h2 class="site-logo"><a href="index.html">HR <strong>Apprisal System</strong>  </a></h2>
              </div>
              <div class="col-9">
                <nav class="site-navigation text-right" role="navigation">
                  <div class="container">
                    <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

                    <ul class="site-menu js-clone-nav d-none d-lg-block">
                      <li>
                        <a href="index.html">User</a>
                      </li>
                      <li><a href="score_HR.html">Scoring</a></li>
                      <li class="has-children">
                         <a href="#">Nama</a>
                        <ul class="dropdown arrow-top">
                          <li><a href="classes.html">Logout</a></li>
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

    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor:'pointer'}} title="close side menu" id="myOverlay"></div>
    <div class="w3-main" style={{marginLeft:300,marginTop:43}}/>




  <div class="w3-panel">
    <div class="w3-row-padding" style={{margin:0 -16}}>
      <div class="w3-twothird">
        <h5 style={{color:'#f23a2e'}}> <center><b>User</b></center></h5>
		    <br/>
        <center>
            <table class="w3-table  w3-white">
            <tr>
                <td><b>Kriteria</b></td>
                <td><b>Score</b></td>
            </tr>
            <tr>
                <td style={{color:'#f23a2e'}}>Recruitment Management</td>
                <td style={{color:'#f23a2e'}}>100</td>
            </tr>
            <tr>
              <td style={{color:'#f23a2e'}}>People Development</td>
                    <td style={{color:'#f23a2e'}}>90</td>
            </tr>
            <tr>
              <td style={{color:'#f23a2e'}}>Organization Development</td>
                    <td style={{color:'#f23a2e'}}>80</td>
            </tr>
            <tr>
              <td style={{color:'#f23a2e'}}>Performance Management</td>
                    <td style={{color:'#f23a2e'}}>85</td>
            </tr>
            <tr>
              <td style={{color:'#f23a2e'}}>Reward Management</td>
                    <td style={{color:'#f23a2e'}}>95</td>
            </tr>
            <tr>
              <td style={{color:'#f23a2e'}}>Termination Management</td>
                    <td style={{color:'#f23a2e'}}>90</td>
            </tr>
            <tr>
                <td style={{color:'#f23a2e'}}>Industrial Relation</td>
                <td style={{color:'#f23a2e'}}>75</td>
            </tr>
            <tr>
                <td style={{color:'#f23a2e'}}>Total </td>
                <td style={{color:'#f23a2e'}}>100</td>
            </tr>
            </table>
        </center>
      </div>
    </div>
  </div>
  <br/>
  <div>
</div>


      </body>
      </div>
</div>
    );
  }
}
export default ScoreQueisioner;
