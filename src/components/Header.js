import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
                <br></br>
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                    <button><a href="/Kristy_E._Keller_Résumé.pdf" download> Download Resume</a></button>
                </p>
                <br></br>
                <br></br>
                <br></br>
                  <p className='heading'>
            {data.headerBrand[0]}
            <br></br>
            </p>
            </Fade>



        </div>);
    }
}

export default Header;