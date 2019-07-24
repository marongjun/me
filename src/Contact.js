// eslint-disable-next-line
import React from 'react';
import './style.css';
import profile from './pic/img.jpg';
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
              I am Rongjun, did my bachelor in China on Internet of Thing, from which I learned a lot about engineering. 
              After graduation, with a passion for Interaction design and curiosity for multicultural communication 
              experience, I came to Europe(One year in Finland and the second in Netherland) for pursuing a master 
              degree in Human and Computer Interaction Design. <br/><br/>
              I love music, travelling, sports, and the best, dogs. If you are interested in my experience, have 
              any further questions or just feel like saying hello, I’d love to hear from you:)
              <br/>rongjun.ma@outlook.com
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
          <a href="" class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-facebook" style={{ color: '#4267B2' }}></i></a>
          <a class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-linkedin" style={{ color: '#0077B5' }}></i></a>
          <a href="https://github.com/marongjun" target="_blank"class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-github" style={{ color: '#000000' }}></i></a>
          <a class="fb-ic mr-3" role="button">
            <i class="fab fa-lg fa-instagram" style={{ color: '#C13584' }}></i></a>
          <hr></hr>
  
        </div>
      )
    }
  }

  export {SelfIntro,Social};