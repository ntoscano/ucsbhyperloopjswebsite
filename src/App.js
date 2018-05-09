import React, {Component} from 'react';
import logo from './logo.svg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Profiles from './components/Profiles/Profiles'
import StaggeredCard from './components/StaggeredCard/StaggeredCard'
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
            <h3 className="PastClients">Our clients include:</h3>
            <Carousel	showThumbs={false} infiniteLoop={true}>
              <div>
                <img src="assets/ck.png"/>
              </div>
              <div>
                <img  src="assets/MA.jpg"/>
              </div>
              <div>
                <img src="assets/ucsbhyp.jpg"/>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="main-body">
          <div className="bigblock" id="pod">
 
            <StaggeredCard image="assets/TeamPhotos/Hyperloop (6 of 64).jpg" index="0" title="The Hyperloop Concept"
               text="The Hyperloop is a new and futuristic mode of transportation proposed by Elon Musk in which a magnetically levitating pod is suspended in a low-pressure tube. Passengers or freight are loaded into the vehicle and accelerated to speeds nearly 200mph faster than that of a commercial jet. This means that a trip from San Francisco to LA - one that could take 7 hours or more by car – is now a 30 minute hyperloop ride!"
            />
            <StaggeredCard image="assets/hyperloop-competition.jpg" index="1" title="Hyperloop Competition"
                text="SpaceX has built a mile-long enclosed test track as well as an open-air track at their facilities in Hawthorne, CA, and has been hosting an annual competition where university teams build prototype Hyperloop pods to race on these tracks. Last year’s UCSB Hyperloop team was a large group of determined undergraduate engineers working, levitating hyperloop pod as their senior design project. Of the several hundred colleges that applied to compete in the 2017 Hyperloop Competition at SpaceX, UCSB was one of 25 selected to attend the competition weekend."
            />
          </div>
          <div className="bigblock" id="team">
            <h1>Meet the Team</h1><br/>
            
            <Profiles team={Mechanical} title="Mechanical Engineers"
            />
            <Profiles team={Electrical} title="Electrical Engineers"
            />
            <Profiles team={CE} title="Computer Engineers" />
            <Profiles team={ADVISORS} title="Advisors"
            />
          </div>
          <div className="bigblock" id="sponsors">
            <h1>Our Sponsors</h1><br />
              <div className="sponsors">
                <ImagesArray imagesArray={SPONSORS} numColumns={4} />
              </div>
          </div>
          <div className="bigblock" id="supportUs">
            <h1>Support Us</h1><br />
            <p><center>
              Please support us by donating <a href="https://gauchoboost.ucsb.edu/project/8953/wall">here</a>. If you have any questions or are interested in becoming a sponsor of this year's UCSB Hyperloop Team, contact us at ucsbhyperloop@gmail.com. 
            </center></p>
          </div>
          <div className="bigblock" id="gallery">
            <h1>Gallery</h1><br/>
            <ImagesArray imagesArray={TEAM_IMAGES} numColumns={4} />
          </div>

          <div className="footer sb-blue">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
