import React from 'react';
import './style.css';
class Banner extends React.Component {
  constructor (props) {
    super()

    this.state = { textIdx: 0 }
  }

  componentDidMount () {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx
      // console.log(this.state.textIdx)
      this.setState({ textIdx: currentIdx + 1 })
    }, 2000)
  }

  componentWillUnmount () {
    clearInterval(this.timeout)
  }

  render () {
    const textArray = ['UX Designer', 'Front-End developer', 'Doer', 'Fast Leaner', 'Thinker']
    let textThatChanges = textArray[this.state.textIdx % textArray.length]

    return (
      <div class = "container" style={{ height: '90vmin' }}>

        <div class= "shaped" >
        </div>
        <p style={{ fontSize: '8vw' }}>Rongjun</p>
        <p style={{ fontSize: '4vw' }}>{textThatChanges} </p>

      </div>
    )
  }
}

class Timeline extends React.Component {
  render () {
    return (
      <div class="container" style={{ marginTop: '3%', width: '90vw' }}>
        <hr></hr>
        <div class="row no-gutters">
          <div class="col-sm">  </div>
          {/* <!-- timeline item 1 center dot --> */}
          <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
              <div class="col">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
              <span class="badge badge-pill bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
              <div class="col border-right">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
          </div>
          {/* <!-- timeline item 1 event content --> */}
          <div class="col-sm py-2">
            <div class="card">
              <div class="card-body">
                <div class="float-right text-muted small" >Sep 2014 - June 2018</div>
                <h4 class="card-title text-muted">University of Science and technology Beijing</h4>
                <p class="card-text">Bachelor in Internet of Things<br/> Minor Degree in Financial Engineering</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/row-->
  <!-- timeline item 2 --> */}
        <div class="row no-gutters">
          <div class="col-sm py-2">
            <div class="card">
              <div class="card-body">
                <div class="float-right text-muted small">Sep 2017 - March 2018</div>
                <h4 class="card-title text-muted">Internship at ABB Corperate Research Center China </h4>
                <p class="card-text">Sensor Calibration<br/>Assisting Experiment<br/>Helping design new monitoring system<br/>
                Literature Review</p>
               
              </div>
            </div>
          </div>

          <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
              <div class="col border-right">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
              <span class="badge badge-pill bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
              <div class="col border-right">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
          </div>
          <div class="col-sm">  </div>
        </div>

        {/* <!--/row-->
        <!-- timeline item 3 --> */}
        <div class="row no-gutters">
          <div class="col-sm"> </div>
          <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
              <div class="col border-right">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
              <span class="badge badge-pill bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
              <div class="col border-right">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
          </div>
          <div class="col-sm py-2">
            <div class="card">
              <div class="card-body">
                <div class="float-right text-muted small">Sep 2018 - June 2020</div>
                <h4 class="card-title text-muted"> EIT Program - Human and Computer Interaction Design</h4>
                <p class="card-text">First year - Aalto Univerity, Finland <br/> Second year - Twente University, Netherland </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/row-->
  <!-- timeline item 4 --> */}
        <div class="row no-gutters">
          <div class="col-sm py-2">
            <div class="card">
              <div class="card-body">
                <div class="float-right text-muted small">May 2019- August 2019</div>
                <h4 class="card-title text-muted">Summer trainee at Nokia HQ</h4>
                <p class="card-text">Automation tool development and data visualization</p>
              </div>
            </div>
          </div>
          <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div class="row h-50">
              <div class="col border-right">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
            <h5 class="m-2">
              <span class="badge badge-pill bg-light border">&nbsp;</span>
            </h5>
            <div class="row h-50">
              <div class="col">&nbsp;</div>
              <div class="col">&nbsp;</div>
            </div>
          </div>
          <div class="col-sm"></div>
        </div>
        {/* <!--/row--> */}

      </div>
    )
  }
}

export {Banner,Timeline};
