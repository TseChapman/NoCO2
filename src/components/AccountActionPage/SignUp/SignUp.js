import React, { Component } from 'react';
import SignUpPannel from './SignUpPannel';
import backgroundImage from '../../../assets/BackgroundImage.jpg';
import '../../../index.css';

export class SignUp extends Component {
  render() {
    return (
      <div>
        <img class="z-0 h-screen w-screen object-cover object-center absolute" src={backgroundImage} alt='Background'/>
        <SignUpPannel/>
      </div>
    );
  }
}