import React from 'react';
import './style.css';
class Navbar extends React.Component {
    constructor (props) {
      super(props)
      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler (value) {
      console.log(value)
      this.props.titleClicked(value)
    }
    render () {
      return (
        <div class="container">
          <ul class="nav justify-content-center" style={{ fontSize: '1.4em', marginTop: '0px' }}>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => this.clickHandler('index')}>About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.clickHandler('projects')}>Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.clickHandler('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      )
    }
  }
  
  class Footer extends React.Component {
    render () {
      return (
        <div id="footer">
          <div class="container text-Align-center " style={{ marginTop: '10%', width: '90vw' }}>
            <p class="footer-block" style={{ fontSize: '1.3em' }}>Web Design &amp; Development &copy; Rongjun Ma</p>
          </div>
        </div>
      )
    }
  }

  export {Navbar,Footer};