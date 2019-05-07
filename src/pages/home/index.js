import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const pilars=[
  {
    id:'rm',
    label:'Pilar 1 - Recruitment Management'
  },

  {
    id:'pd',
    label:'Pilar 2 - People Development'
  },

  {
  id:'od',
    label:'Pilar 3 - Organization Development'
  },

  {
  id:'pm',
  label:'Pilar 4 - Performance Management'
  },

  {
  id:'rmt',
  label:'Pilar 5 - Reward Management'
  },

  {
  id:'tm',
  label:'Pilar 6 - Termination Management'
  },
  {
    id:'ir',
    label:'Pilar 7 - Industrial Relation'
    },
]
class Home extends Component {
    render() {
        return (



<div className="block-schedule overlay site-section" >
      <div className="container">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-sunday" role="tabpanel" aria-labelledby="pills-sunday-tab">
                {pilars.map(pilar=>{
                  return (
							<div key={pilar.id} className="text-center w-100">
								<div className="heading text-uppercase">
									<Link to={`/pilar/${pilar.id}`} className="btn btn-primary pill px-5 mt-5 mt-md-4 w-100">{pilar.label}</Link>
								</div>
							</div>
                  )
                })
                }

          </div>
        </div>
      </div>
    </div>
        )
    }
}
export default Home;
