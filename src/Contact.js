// eslint-disable-next-line
import React from 'react';
import './style.css';
import profile from './pic/img.jpg';

class SelfIntro extends React.Component {
    render () {
      return (
        <div class="container col-lg-8">
          <img src={profile} alt="profile" class="rounded-circle" width="200px" height="200px"/>
          <div style={{ marginTop: '10%' }}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum
            consectetur libero id faucibus nisl. Mi bibendum neque egestas congue quisque egestas
            diam in. Integer vitae justo eget magna fermentum iaculis. Vestibulum morbi blandit
            cursus risus. Eget sit amet tellus cras. Ullamcorper eget nulla facilisi etiam.
             Egestas pretium aenean pharetra magna ac placerat vestibulum. Tincidunt lobortis
             feugiat vivamus at augue eget arcu dictum. Hac habitasse platea dictumst vestibulum.
              Rutrum quisque non tellus orci ac auctor augue mauris augue. Tortor condimentum
              lacinia quis vel eros donec. Morbi tincidunt augue interdum velit euismod in
              pellentesque massa. Semper viverra nam libero justo laoreet.
            </p>
          </div>
        </div>
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