import React from 'react';
import './style.css';
import SplitText from 'react-pose-text';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

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
    const textArray = ['PhD Candidate', 'User Researcher', 'Explorer']
    let textThatChanges = textArray[this.state.textIdx % textArray.length]

    return (
      <div class = "container" style={{ width: '80vmin', height: '50vmin' }}>

        <div class= "shaped" >
        </div>
        <p style={{ fontSize: '4rem' }} ><SplitText charPoses={charPoses}>Rongjun</SplitText></p>
        <p style={{ fontSize: '2rem' }}>{textThatChanges} </p>

      </div>
    )
  }
}


class Timeline extends React.Component {
  render () {
    return (
  
      <div class="container" style={{ marginTop: '3%', width: '90vw' }}>
        
        <hr></hr>
        <div class =  "card" style={{ marginTop: '3%', marginBottom:'3%'}}>
      <p style={{ fontSize: '1rem' }} >I am Rongjun Ma, a third-year PhD Student. My research interest lies in 
    understanding how people interact with everyday technology including web browsing and social media and digital wellbeing. I have studied how
    people experience information overload during web browsing (published in <a href="https://dl.acm.org/doi/10.1145/3544548.3580690">CHI 2023</a>), how people manage multiple applicaitons to 
    negotiate digital communciation needs (under review CHI 2024), and how people's trust differ in information sourced from ChatGPT
    and Google (under review IUI 2024). Please check projects for more details. <br/>My expertise is <b>mixed method user research</b> including using qualitative methods such as 
    interview, diary, workshop and quantitative methods such as suvey, statistical analysis and modeling and more to observe and 
    understand users for better user experience. <br/>See below for my brief education experience.</p>
        </div>

        <div class="row no-gutters">
 
          <div class="col-sm">  </div>
  
     <></>{/* <!-- timeline item 1 center dot --> */}
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
                <div class="float-right text-muted small" >Dec 2020 - Present</div>
                <h4 class="card-title text-muted">Doctoral Researcher at Aalto Univeristy</h4>
                <p class="card-text"><a href="https://www.lindqvistlab.org/">Aalto HCI and security engineering lab</a><br/> Supervised by Assoc. Prof. Janne Lindqvist</p>
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
                <div class="float-right text-muted small">Sept 2018 - Sept 2020</div>
                <h4 class="card-title text-muted">EIT Master Program - Human and Computer Interaction Design </h4>
                <p class="card-text">First year - Aalto Univerity, Finland <br/> Second year - Twente University, Netherland<br/>
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
                <div class="float-right text-muted small">Sep 2014 - June 2018</div>
                <h4 class="card-title text-muted"> University of Science and technology Beijing</h4>
                <p class="card-text">Bachelor major in Internet of Things<br/> Minor Degree in Financial Engineering</p>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    )
  }
}

export {Banner,Timeline};
