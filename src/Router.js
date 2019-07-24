import React from 'react';
import './index.css';
import {Footer} from './Common';
import p1 from './pic/p1.jpg';
import p2 from './pic/p2.jpg';
import p3 from './pic/p3.jpg';
import p4 from './pic/p4.jpg';
import {Banner,Timeline} from './Main';
import {SelfIntro,Social} from './Contact';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {NavList,Content} from './projects/ProjectContent';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const NavPress = posed.div({
  pressable:true,
  init:{scale:1},
  press:{scale:0.8}
})

function Test(){
    return(
      <Route render={({location})=>(
        <div class="container">
            
              <ul class="nav justify-content-center" style={{ fontSize: '1.4em', marginTop: '0px' }}>
                <NavPress>
                  <li class="nav-item">
                    <Link to="/" class="nav-link active" >About Me</Link>
                  </li>
                </NavPress>
                <NavPress>
                  <li class="nav-item">
                    <Link to="/projects" class="nav-link" >Projects</Link>
                  </li>
                </NavPress>
                <NavPress>
                  <li class="nav-item">
                    <Link to="/contact" class="nav-link" >Contact</Link>
                  </li>
                </NavPress>         
                </ul>   
            
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} key="home"/>
                  <Route path="/projects" component={Projects} key="projects"/>
                  <Route path="/contact" component={About} key="about"/>
                  <Route path="/item" component={Item} key="item"/>
                </Switch>      
              </RouteContainer>    
            </PoseGroup>
            
           

          </div>
      )
      }/>
          
    
    )
  }

function Home(){
  return(
    <div>
          <div class="justify-content-center" style={{ marginTop: '1%', textAlign: 'center' }}>
          <div>
          <Banner />
          <Timeline />
           </div>
            <Footer />
          </div>
      </div>
  )
}

function Projects({match}){
  return(
    <div>
          <div class="justify-content-center" style={{ marginTop: '1%', textAlign: 'center' }}>
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
                    <Link to={"/item"}>
                      <img class="img-fluid" src={p1} alt="" />
                      <div class="overlay">
                        <div class="text">Automation Tool for information management<br/>
                          <span style={{ fontSize: '30px', color: '#124191' }}>Nokia</span></div>
                      </div>
                    </Link>
  
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
          <Route path={"/item"} component={Item} />
        </div>
            <Footer />
          </div>
        </div>
  )
}

function Item(){
  return (
  <div>
    <NavList />
    <Content />
  </div>)
}

function About(){
  return(
    <div>
          <div class="justify-content-center" style={{ marginTop: '1%', textAlign: 'center' }}>
          <div>
            <SelfIntro />
            <Social />
          </div>
            <Footer />
          </div>
        </div>
  )
}

export default Test;