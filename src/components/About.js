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
                <div>
                {data.ShowAboutImage ? <img class="about-img" src={data.aboutImage} alt='about imaghe'></img> : null}
                </div>
                <div>
                    <p>{data.abouttext[0]}</p><br></br><p>{data.abouttext[1]}</p><br></br>
            <p>{data.abouttext[2]}</p><br></br><p>{data.abouttext[3]}</p><br></br>
            </div>
            </Fade>
            </div>
         

        </div>  );
    }
}
 
export default About;
