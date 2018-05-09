import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Columns from 'react-columns'
import MediaQuery from 'react-responsive';
import './StaggeredCard.css'

class StaggeredCard extends Component {


    constructor(props) {
        super(props);
    }

    renderPicture(imageSrc, link) {
        return (
            <div className="cardImage">
                <br />
                <center>
                    <a href={link} target="_blank"><img src={imageSrc} /></a>
                </center>
            </div>

            );
    }
    renderText(title, text, link){
        return (
            <div>
                <a href={link} target="_blank"><h3>{title}</h3></a>
                <p>{text}</p>
            </div>
        );
    }

    render() {
        if (this.props.index % 2 === 0) {
            return (
                <div className="staggeredCard">
                    <MediaQuery query="(min-width: 700px)">
                    
                        <Columns columns={2} gap="20px">
                            {this.renderText(this.props.title, this.props.text, this.props.link)}
                            {this.renderPicture(this.props.image, this.props.link)}
                        </Columns>
                   
                    </MediaQuery>
                    <MediaQuery query="(max-width: 700px)">
                   
                        <Columns columns={1} gap="20px">
                            {this.renderText(this.props.title, this.props.text, this.props.link)}
                            {this.renderPicture(this.props.image, this.props.link)}
                        </Columns>
                    
                    </MediaQuery>
                </div>
                );
        }
        else {
            return (
                <div style={{backgroundColor: "rgb(239, 239, 239)"}} className="staggeredCard">
                    <MediaQuery query="(min-width: 700px)">
                    
                        <Columns columns={2} gap="20px">
                            {this.renderPicture(this.props.image, this.props.link)}
                            {this.renderText(this.props.title, this.props.text, this.props.link)}
                        
                        </Columns>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 700px)">
                        <Columns columns={1} gap="20px">
                            {this.renderPicture(this.props.image, this.props.link)}
                            {this.renderText(this.props.title, this.props.text, this.props.link)}

                        </Columns>
                   
                    </MediaQuery>
                </div>
            );
        }
    };

}

export default StaggeredCard