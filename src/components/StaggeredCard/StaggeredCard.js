import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Columns from 'react-columns'
import MediaQuery from 'react-responsive';
import './StaggeredCard.css'

class StaggeredCard extends Component {


    constructor(props) {
        super(props);
    }

    renderPicture(imageSrc) {
        return (
            <div className="cardImage">
                <br />
                <center>
                    <img src={imageSrc} />
                </center>
            </div>

            );
    }
    renderText(title, text){
        return (
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        );
    }

    render() {
        if (this.props.index % 2 !== 0) {
            return (
                <div className="staggeredCard">
                    <MediaQuery query="(min-width: 700px)">
                    
                        <Columns columns={2} gap="20px">
                            {this.renderText(this.props.title, this.props.text)}
                            {this.renderPicture(this.props.image)}
                        </Columns>
                   
                    </MediaQuery>
                    <MediaQuery query="(max-width: 700px)">
                   
                        <Columns columns={1} gap="20px">
                            {this.renderText(this.props.title, this.props.text)}
                            {this.renderPicture(this.props.image)}
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
                            {this.renderPicture(this.props.image)}
                            {this.renderText(this.props.title, this.props.text)}
                        
                        </Columns>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 700px)">
                        <Columns columns={1} gap="20px">
                            {this.renderPicture(this.props.image)}
                            {this.renderText(this.props.title, this.props.text)}

                        </Columns>
                   
                    </MediaQuery>
                </div>
            );
        }
    };

}

export default StaggeredCard