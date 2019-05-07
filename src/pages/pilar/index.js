import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';



class Pilar extends Component {
    render() {
        console.log(this.props)
        const { match, pilar } = this.props
        if(!isLoaded(pilar)){
          return (<div className="block-schedule overlay site-section" >
              <div className="container">
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>)
        }

        const pilarid = match.params.pilarid
        const selectedPilar = pilar[pilarid]
        const criteria=selectedPilar.criteria
        const criteriaKeys = Object.keys(criteria)
        return (

            <div className="block-schedule overlay site-section" >
                <div className="container">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-sunday" role="tabpanel" aria-labelledby="pills-sunday-tab">

                            <h3 className="text-white display-5 mb-4">{selectedPilar.title}</h3>
                            { criteriaKeys.map(key=>{
                                const criteriaValue=criteria[key]
                                return (<div key={key} className="text-center w-100">
                                <div className="heading text-uppercase"><Link to={`/soal/${key}/soal1`} className="btn btn-primary pill px-5 mt-5 mt-md-3 w-100">{criteriaValue.label}</Link></div>
                            </div>)
                            })
                                }
                            <div className="row bg-red p-3 align-items-center">
                                <div className="heading text-uppercase col-sm-3 col-md-3 col-lg-1 text-md-right"><Link to={`/`} className="btn btn-primary px-3 mt-3 mt-md-3">Kembali</Link></div>
                                <div className="heading text-uppercase col-sm-3 col-md-3 col-lg-11 text-md-right"><a href="#" className="btn btn-primary px-3 mt-3 mt-md-3">Selesai</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default compose(
  firebaseConnect((props) => {
    return [
      'pilar' //database node
    ]
  }),
  connect(
    (state) => ({
      pilar: state.firebase.data.pilar,
      // profile: state.firebase.profile // load profile
    })
  )
)(Pilar);
