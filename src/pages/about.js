import React, { Component } from 'react';

class About extends  Component {

  renderAboutInformationList() {
    return <div>
      <h3>Important Information</h3>
      <ul>
        <li>Created by: Adrian Boisclair</li>
        <li>Created at: 05/01/2019</li>
      </ul>
    </div>
  }

  render() {
    return <div className="about-page__container">
      <div className="about-page__content">
        This is a react application.
      </div>
    </div>
  }
}

export default About;