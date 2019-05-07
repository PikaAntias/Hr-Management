import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';


class Soal extends Component {

  handleChange=(e)=>{
    const poin = e.target.value //untuk mengambil poin
    const {firebase, auth, match}=this.props;
    const criteriaid = match.params.criteriaid; //variabel menampung criteria yang ada di param
    const soalid = match.params.soalid; //variabel menampung soal yang ada di param
    firebase.update(`jawaban/${auth.uid}/${criteriaid}`, {[soalid]:poin}) //membuat root baru dengan nama jawaban
  }

    render() {
      const { match, soal, history, auth, jawaban } = this.props
      if(!isLoaded(soal, auth, jawaban)){
        return (<div className="site-section bg-light">
              <div className="container">
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
          </div>
        </div>)
      }

      const criteriaid = match.params.criteriaid; //variabel menampung criteria yang ada di param
      const soalid = match.params.soalid; //variabel menampung soal yang ada di param

      const listSoal = soalid.split('l')
      let first = listSoal[0]+'l'
      let last = parseInt(listSoal[1])

      console.log(JSON.stringify(jawaban[auth.uid][criteriaid][soalid])+"yg ini");
      const soalIdNext = first.concat(last+1)

      const pageBack = first.concat(last-1)

      const activeSoal = soal[criteriaid][soalid]; //soal sudah sesuai dengan criteria
      const activeJawaban = jawaban[auth.uid] && jawaban[auth.uid][criteriaid] && jawaban[auth.uid][criteriaid][soalid] ? jawaban[auth.uid][criteriaid][soalid]: null;
      const jumSoal = Object.keys(soal[criteriaid]).length //mengambil jumlah soal sesuai criteria
      const handleBack = (e)=>{
        e.preventDefault()
        if(last >= 1 && last <= jumSoal){
          history.push(`/soal/${criteriaid}/${pageBack}`)
        }
      }
      const handleNext = (e)=>{
        e.preventDefault()
        if(last <= jumSoal){
          history.push(`/soal/${criteriaid}/${soalIdNext}`)

        }
      }

      console.log(jumSoal);
      console.log(soalIdNext, pageBack, last);

        return (
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9 mb-5">
                            <form action="#" className="p-5 bg-white">

                                <h3 className="h5 text-black mb-3">{activeSoal.criteria}</h3>
                                <p>{activeSoal.pertanyaan}</p>
                                <div className="form-group">
                                    <div className="col-sm-12"> <br></br>
                                        {Object.keys(activeSoal.pilihan).map(key => {
                                          const pilihan = activeSoal.pilihan[key]
                                          console.log(pilihan);
                                          return (<div key={key} className="col-sm-13 padding-1">
                                              <input type="radio" onChange={this.handleChange} value={pilihan.poin} checked={activeJawaban == pilihan.poin} name="option" /> {pilihan.text}
                                          </div>)
                                          }
                                        )
                                      }
                                            <br></br>
                                            <p><button onClick={handleBack} disabled={last == 1} type="button" className="btn btn-primary px-5 py-2 text-white pill">KEMBALI</button>
                                            <button onClick={handleNext} disabled={last >=jumSoal} type="button" className="btn btn-primary px-5 py-2 text-white pill">SELANJUTNYA</button></p>


                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-4 mb-3 bg-white">
                                <p className="mb-0 font-weight-bold">Evidence</p>
                                <p className="mb-4">{activeSoal.evidence}</p>

                                <p className="mb-0 font-weight-bold">Align With</p>
                                <p>{activeSoal.align}</p>

                                <p className="mb-0 font-weight-bold">Assesor Note</p>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <textarea name="message" id="message" cols="10" rows="3" className="form-control" placeholder="Note..."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 mb-3 bg-white">
                                <h3 className="h5 text-black mb-3">Dokument to be collected</h3>
                                <p>-</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default compose(
  firebaseConnect((props) => {
    return [
      'soal',
      'jawaban'
    ]
  }),
  connect(
      (state) => ({
        soal: state.firebase.data.soal,
        auth: state.firebase.auth,
        jawaban: state.firebase.data.jawaban,
      })
    )
)(Soal);
