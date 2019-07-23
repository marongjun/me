import React from 'react';
import '../style.css';
import screenshots from '../pic/screenshots.jpg';
import BI1 from '../pic/BI1.png';
import BI2 from '../pic/BI3.png';
import BI3 from '../pic/BI3.png';
import BI4 from '../pic/BI4.png';
class NavList extends React.Component {
    render () {
      return (
        <div class="container col-lg-8" style={{ textAlign: 'left', marginTop: '3%' }}>
          <span style={{ fontSize: '30px', color: '#FFFFF' }}>
          Automation Tool for Nokia
          </span>
          <hr></hr>
        </div>
  
      )
    }
  }
  
  class Content extends React.Component {
    render () {
      return (
  
        <div class="justify-content-center" style={{ fontFamily: 'Raleway', textAlign: 'left', lineHeight: '200%' }} >
          {/* ----------Overview-------- */}
          <div class="justify-content-center" style={{ display: 'flex' }}>
            <div class="col-lg-8">
              <h class="bg-light " style={{ fontSize: '1.5rem' }}><br/>Overview</h>
              <p class="content"><br/>During the four-month internship at Nokia, my topic is to help a team under 5G product management department
                to <u>develop an automation tool for market scouting information management and data visualization</u>. I am responsible for
                designing and implementing the whole work flow from requirement specifiying, prototype designing and application implementing.
                During the iteration, I used <b class="word">Sketch</b> to draw the Lo-fi concept and then <b class="word">inVision</b> for Hi-fi one and implemented the <a href="https://github.com/marongjun/web" target="_blank">
                <b>first version</b></a> using <b class="word">ReactJs/Bootstrap (Front-end) /PHP (Backend)/MS SQL(Database)</b>. <br/><br/>Unfortunately, at the middle of my internship, due to confidential issues
                 concerning security and platform, we decided to transfer to use the tool SharePoint and dropped the incomplete web applictaion.
                 During the second half of my internship, I arranged team meetings to gather the requirements and created a team site with <b class="word">Microsoft SharePoint</b>
                 and a <b class="word">Power BI</b> report for data visualization and info seraching.
              </p>
            </div>
          </div>
          {/* ----------Web Development-------- */}
          <div class="justify-content-center" style={{ display: 'flex', marginTop: '5%' }}>
            <div class="col-lg-8">
              <h class="bg-light title" style={{ fontSize: '1.5rem' }}>Web Development</h>
              <p class="content">
                <br/><b>Specifiying Requirements</b><br/>
              The idea is to create am automation tool to optimize the current working way with excel and store data distributedly among team
              members located in different countries so the first need is to collect data, with a clear and convenient interface, and then
              process the data in the same format and store them in a database. The second need being that information could be searched
              quickly. Third, a visualization is needed to show the big picture of different projects' status with a timeline.<br/>
                <br/> Some design drafts below shows the procedure of designing the framework and specifying user needs.
              </p>
            </div>
          </div>
          {/* ----------img sldies-------- */}
          <div class="justify-content-center" style={{ display: 'flex' }}>
            <div id="nokiaDesign" class="carousel slide col-lg-8 col-md-10" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#nokiaDesign" data-slide-to="0" class="active"></li>
                <li data-target="#nokiaDesign" data-slide-to="1"></li>
                <li data-target="#nokiaDesign" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="pic/nokia1.png" alt="First slide" style={{ padding: '10%' }}/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="pic/nokia2.png" alt="Second slide" style={{ padding: '10%' }}/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="pic/nokia3.png" alt="Third slide" style={{ padding: '10%' }}/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#nokiaDesign" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#nokiaDesign" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/* ----------Prototype-------- */}
          <div class="justify-content-center" style={{ display: 'flex' }}>
            <div class="col-lg-8">
              <p class="content">
                <b>Designing the prototype</b><br/>
              After determining every detail about requirements, I began to design the interface with Sketch and made
              an interactive prototype with inVison.<br/><br/>
              Here is the link to the prototype and some screenshots of the design.<br/>
                <a href="https://projects.invisionapp.com/share/8BRVT7LEFA4#/screens/361854384" target="_blank">Try inVision Prototype</a>
              </p><br/><br/>
              <img src={screenshots} class="shadow d-block" style={{ width: '70%', margin: 'auto' }}></img><br/><br/>
            </div>
          </div>
          {/* ---------Coding-------- */}
          <div class="justify-content-center" style={{ display: 'flex' }}>
            <div class="col-lg-8">
              <p class="content">
                <br/><b>Coding</b><br/>
                According to the design I began to implement the web application. As required by the team,
                the backend is done by PHP and I use Microsoft SQL database to store the data. A query is done
                via a procedure programmed in the database. In terms of the front-end part, I use the Bootstrap
                components for the layout and ReactJS for the interaction.<br/>
                <a href="https://github.com/marongjun/web" target="_blank">Show me the Code</a>
              </p>
            </div>
          </div>
          {/* ---------SharePoint & PowerBI------- */}
          <div class="justify-content-center" style={{ display: 'flex', marginTop: '5%' }}>
            <div class="col-lg-8">
              <h class="bg-light title" style={{ fontSize: '1.5rem' }}>SharePoint and PowerBI</h><br/><br/>
              <p class="content">
             With the same Requirements, I quickly transformed the previous output using the MicroSoft SharePoint to create
             a team site with the same function and then launched the first version with our team to test. The team
             site is easy to maintain and add a new module while the drawback is that it might be hard to
             customize a special function. I arranged a meeting to discuss and finally, we made a consensus of
             balancing the need and function.<br/>
             After the data collecting part is done, I was able to explore PowerBI to dig the possibility to find a way
             that makes it efficient to check the status and search our the info of different projects.
                <br/>
                <br/> Due to the confidential issue, this work can not be visited by outside people but below it shows some
                rough concept of visualizing the data.
              </p>
            </div>
          </div>
          {/* ---------img grid--------- */}
          <div class="justify-content-center" style={{ display: 'flex', marginTop: '5%' }}>
            <div class="col-lg-8">
              <div class="gallery">
                <figure class="gallery__item gallery__item--1">
                  <img src={BI1} class="shadow gallery__img" alt="Image 1"/>
                </figure>
                <figure class="gallery__item gallery__item--2">
                  <img src={BI2} class="shadow gallery__img" alt="Image 2"/>
                </figure>
                <figure class="gallery__item gallery__item--3">
                  <img src={BI3} class="shadow gallery__img" alt="Image 3"/>
                </figure>
                <figure class="gallery__item gallery__item--4">
                  <img src={BI4} class="shadow gallery__img" alt="Image 4"/>
                </figure>
              </div>
            </div>
          </div>
          {/* --------The end--------- */}
        </div>
      )
    }
  }

  export {NavList,Content}