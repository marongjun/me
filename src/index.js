import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar,Footer} from './Common';
import ProjectItem from './project/ProjectItem';
import {Banner,Timeline} from './Main';
import {Contact,Social} from './Contact';
import * as serviceWorker from './serviceWorker';



class Root extends React.Component {
    constructor () {
      super()
      this.state = {
        currentPage: <div>
          <Banner />
          <Timeline />
        </div>
      }
      this.clickTitle = this.clickTitle.bind(this)
    }
    clickTitle (value) {
      if (value === 'index') {
        this.setState({
          currentPage: <div>
            <Banner />
            <Timeline />
          </div>
        })
      } else if (value === 'projects') {
        this.setState({
          currentPage: <ProjectItem />
        })
      } else if (value === 'contact') {
        this.setState({
          currentPage: <div>
            <Contact />
            <Social />
          </div>
        })
      }
    }
    render () {
      return (
        <div>
          <Navbar titleClicked={this.clickTitle} />
          <div class="justify-content-center" style={{ marginTop: '1%', textAlign: 'center' }}>
            {this.state.currentPage}
            <Footer />
          </div>
        </div>
      )
    }
  }

ReactDOM.render(<Root />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
