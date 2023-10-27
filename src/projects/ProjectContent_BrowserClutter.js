import React from 'react';
import '../style.css';
import screenshots from '../pic/screenshots.png';
import BI1 from '../pic/BI1.png';
import BI2 from '../pic/BI2.png';
import BI3 from '../pic/BI3.png';
import BI4 from '../pic/BI4.png';
import nokia1 from '../pic/nokia1.png';
import nokia2 from '../pic/nokia2.png';
import nokia3 from '../pic/nokia3.png';
import CHI_present from '../pic/CHI_present.JPG'
import posed from 'react-pose';
import Carousel from 'react-bootstrap/Carousel';

const Container = posed.div({
  enter: {staggerChildren :50},
  exit:{staggerChildren:20,staggerDirection:-1}
})

const P = posed.p({
  enter:{y:0,opacity:1},
  exit:{y:50,opacity:0}
})

class NavList_clutter extends React.Component {
    render () {
      return (
        <div class="container col-lg-8" style={{ textAlign: 'left', marginTop: '3%' }}>
          <span style={{ fontSize: '2.3rem', color: '#FFFFF' }}>
          When browsing gets cluttered
          </span><br/>
          <span style={{ fontSize: '1.1rem', color: '#FFFFF' }}>
          Exploring and Modeling Interactions of Browsing Clutter, 
                          Browsing Habits, and Coping. <br/>
                          <a href="https://dl.acm.org/doi/10.1145/3544548.3580690" target="_blank">Link to publication</a>
          </span>
          <hr></hr>
        </div>
  
      )
    }
  }
  
  class Content_clutter extends React.Component {
    render () {
      return (
        <Container>
          <div class="justify-content-center" style={{ fontFamily: 'Raleway', textAlign: 'left', lineHeight: '200%' }} >
                    {/* ----------Overview-------- */}
                    <div class="justify-content-center" style={{ display: 'flex' }}>
                      <div class="col-lg-8">
                        <P style={{ fontSize: '1.5rem' }}><br/>Overview</P>
                        <P class="content"><br/>
                        Browsing clutter is the first project of my PhD research journey. With the goal of 
                        having a comprehensive understanding of the information overload experience in web 
                        browsing, we ran a mixed-method research including a <b class="word">qualitative interview
                         study</b> (N = 16) and <b class="word">quantitative survey study</b> (N = 400). 
                        This paper is presented at CHI 2023 confernece in Hamburg, Germany.
                        </P>
                      <br/><br/>
                        <img src={CHI_present} class="shadow d-block" style={{ width: '70%', margin: 'auto' }}></img><br/><br/>
                      </div>
                    </div>    
                    
                    {/* ----------Web Development-------- */}
                    <div class="justify-content-center" style={{ display: 'flex', marginTop: '5%' }}>
                      <div class="col-lg-8">
                        <P style={{ fontSize: '1.5rem' }}>Research Questions</P>
                        <P class="content">
                          <br/><b>How do people experience clutter during web browsing? 
                            What behaviours contribute to the clutter, and 
                            what are people's strategies to cope with the cluttered situations?
                            </b><br/><br/>
                            Web browser as an interface for accessing information and services such as email, SNS 
                            has been busy and crowded.  

                        </P>
                      </div>
                    </div>
                
                    {/* --------The end--------- */}
                  </div>
        </Container>
        
      )
    }
  }

  export {NavList_clutter,Content_clutter}