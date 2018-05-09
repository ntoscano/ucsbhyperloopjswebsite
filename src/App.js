import React, {Component} from 'react';
import logo from './logo.svg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Profiles from './components/Profiles/Profiles'
import StaggeredCard from './components/StaggeredCard/StaggeredCard'
import WhoAreWe from './components/WhoAreWe/WhoAreWe';
import NavBar from './components/NavBar/NavBar'
import ImagesArray from './components/ImagesArray/ImagesArray'
import Footer from './components/Footer/Footer'
import Columns from 'react-columns'
import { Mechanical, Electrical, CE, ADVISORS, TEAM_IMAGES, SPONSORS } from './constants';

import appStyles from './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="head">
          <div className="firstLook">
            <img className="slogan" src="assets/slogan.jpg"/>
          </div>
          <div className="carouselwrapper">
            <h3 className="Caslon">Our clients include:</h3>
            <Carousel	showThumbs={false} infiniteLoop={true}>
              <div>
                <img src="assets/ck.png"/>
              </div>
              <div>
                <img  src="assets/MA1.jpg"/>
              </div>
              <div>
                <img src="assets/ucsbhyp.jpg"/>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="main-body">
          <div className="bigblock">
            <div id="us">
              <WhoAreWe />
            </div>
            <div id="clients">
              <h2 className="Caslon">Past Projects:</h2>
              <StaggeredCard image="assets/ck1.jpg" index="0" title="Credit Karma" link="https://www.creditkarma.com/"
                  text="For Credit Karma, we worked on internal client management tools, affecting 90% of their revenue. We implemented both server-side architectural improvements and front-end redesigns. For security reasons, specific details and technologies and used cannot be disclosed."
              />
              <StaggeredCard image="assets/MA.jpg" index="1" title="Moody's Analytics" link="https://www.moodysanalytics.com/"
                text="For Moody's, we worked on building an internal component library to allow their separate verticals to build off one-another, effectively turning internal competition of resources into synergistic cooperation. We used a wide array of technology for both front and back end development, including Java, Python, and Javascript. Within Javascript we used Angular 1, 2, and 4, in addition to typescript, Bootstrap, and Node. We dove particularly deep into Angular, making use of Hot Module Reloading, Server Side Rendering, and Redux-style state management."
              />
              <StaggeredCard image="assets/team2.jpg" index="2" title="UCSB Hyperloop" link="http://www.ucsbhyperloop.com/"
                text="For the UCSB Hyperloop team, we were asked to create their promotional page that would be utilized to attract sponsors and donations. We started by recruiting top web developers with the experience necessary to meet their 2-3 week timeline, a norm within the startup community. Then built their website in Javascript, utilizing Material design, React, Webpack, and Node."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
