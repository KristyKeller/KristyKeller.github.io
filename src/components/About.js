import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext[0]}</p><br></br><p>{data.abouttext[1]}<p><br></br>
            {data.abouttext[2]}</p><br></br><p>{data.abouttext[3]}<br></br></p></p><br></br>
            </Fade>
            </div>
            <br></br>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
            

        </div>  );
    }
}
 
export default About;