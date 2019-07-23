import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';
import p1 from '../pic/p1.jpg';
import p2 from '../pic/p2.jpg';
import p3 from '../pic/p3.jpg';
import p4 from '../pic/p4.jpg';
import * as serviceWorker from '../serviceWorker';

class ProjectItem extends React.Component {
    constructor (props) {
      super()
      this.state = {
        url: ''
      }
    }
  
    imgClick () {
     
    }
  
    render () {
      return (
        <div class="row justify-content-center">
  
          <div class="col-lg-8">
            <h2>Projects</h2>
            {/* <!--Main card--> */}
            <div class="card">
              {/* <!--Card Body --> */}
              <div class="card-body">
                <h5 class="card-title">by Rongjun Ma</h5>
                {/* <!--Card--> */}
                <div class="row">
                  {/* project 1  */}
                  <div class="view col-md-6 my-1">
                    {/* <div class="view"> */}
                    {/* <img class="img-fluid" src="pic/p1.jpg" alt="" style={{ cursor: 'pointer' }}
                      onClick={this.imgClick.bind(this, 'projectcontent.html')}/> */}
                    <a onClick={this.imgClick.bind(this)}>
                      <img class="img-fluid" src={p1} alt="" />
                      <div class="overlay">
                        <div class="text">Automation Tool for information management<br/>
                          <span style={{ fontSize: '30px', color: '#124191' }}>Nokia</span></div>
                      </div>
                    </a>
  
                  </div>
                  {/* project 2  */}
                  <div class="col-md-6 my-1">
                    <div class="view">
                      <img class="img-fluid" src={p2} alt=""/>
                    </div>
                  </div>
  
                  {/* project 3  */}
                  <div class="col-md-6 my-1">
                    <div class="view">
                      <img class="img-fluid" src={p3} alt=""/>
                    </div>
                  </div>
                  {/* project 4  */}
                  <div class="col-md-6 my-1">
                    <div class="view">
                      <img class="img-fluid" src={p4} alt=""/>
                    </div>
                  </div>
                  {/* ---end of cards */}
                </div>
  
              </div>
              {/* <!--Card Body --> */}
            </div>
            {/* <!--Main card--> */}
          </div>
        </div>
  
      )
    }
  }

 export default ProjectItem;  