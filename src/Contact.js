// eslint-disable-next-line
import React from 'react';
import './style.css';
import profile from './pic/Chester.jpg';
import posed from 'react-pose';

const Container = posed.div({
  enter: {staggerChildren :50},
  exit:{staggerChildren:20,staggerDirection:-1},
})

const P = posed.p({
  enter:{y:0,opacity:1},
  exit:{y:50,opacity:0}
})

class SelfIntro extends React.Component {
    render () {
      return (
        <Container>
          <div class="container col-lg-8">
            <div style={{marginTop:'10%'}}>
            <img src={profile} alt="profile" class="rounded-circle" width="200px" height="200px"/>
            </div>       
            <div style={{ marginTop: '10%'}}>
              <P>
              I am Rongjun, currently based in Finland. I am passionate about exploring and learning new theories, 
              designs, and technologies. I hope to make an effort to understand and create a harmonious relationship
               between humans and fast-growing technology. 
               <br/><br/>
              I love music, travelling, sports, and my favoooooorite cat Chester (see him above). If you are interested in my experience, have 
              any further questions or just feel like saying hello, I’d love to hear from you:)
              <br/>rongjun.ma[at]outlook.com
              </P>
            </div>
          </div>
        </Container>
        
      )
    }
  }
  
  class Social extends React.Component {
    render () {
      return (
        <div class="container col-lg-8" style={{ marginTop: '3%' }}>
          {/* <a href="" class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-facebook" style={{ color: '#4267B2' }}></i></a> */}
            <a href="https://www.linkedin.com/in/rongjun-ma/?originalSubdomain=fi" target="_blank" class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-linkedin" style={{ color: '#0077B5' }}></i></a>
          <a href="https://github.com/marongjun" target="_blank"class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-github" style={{ color: '#000000' }}></i></a>
            <a href="https://instagram.com/mrongjun?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-instagram" style={{ color: '#C13584' }}></i></a>
          <hr></hr>
  
        </div>
      )
    }
  }

  export {SelfIntro,Social};