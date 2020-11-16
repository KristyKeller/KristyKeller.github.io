import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {}
    render() {
        return (
            <Fade bottom>
                <div className='project'>
                    <a target="blank" href={this.props.url}>
                        <img src={this.props.imageSrc} alt={this.props.title}></img>
                    </a>
                    <h1>{this.props.title}</h1>
                    <p><span>{this.props.description}</span></p>
                    <p>{this.props.service}</p>
                    
                    <button class='projectBtn'><a target="_blank" href={this.props.urlCode} alt={this.props.urlCode}> Github</a></button>

                </div>
            </Fade>);
    }
}

export default Project;

