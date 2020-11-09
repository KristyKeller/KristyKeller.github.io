import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a target="_blank" href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1>{this.props.title}</h1>
            <p><span>{this.props.description}</span></p>
            <span>{this.props.service}</span>
        </div> 
            </Fade>);
    }
}
 
export default Project;