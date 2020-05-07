import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%',  margin: 'auto'}}>
                <Grid className="landing-grid">
                    <cell col={12}>
                        <img
                        src="img/dan.gif"
                        alt="avatar"
                       className="avatar-img"
                        />

                        <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                         <hr/>
                         <p>HTML/CSS | Bootstrap | JavaScript | React Native | NodeJs | Express | MongoDB</p>
                         <div className="social-links">

                               {/* LinkedIn */}
                             <a href="https://www.linkedin.com/in/obinna-daniel-470a921a3/" rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-linkedin-square" aria-hidden="true" /> 
                             </a>
                                 {/* Github */}
                                 <a href="https://github.com/obinnadaniel" rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-github-square" aria-hidden="true" />
                             </a>
                                 {/* Freecodecamp */}
                                <a href="https://www.facebook.com/frank.badu.5" rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-facebook-square" aria-hidden="true" />
                             </a>
                                 {/* Youtube */}
                                <a href="https://www.instagram.com/obinnadaniel30/" rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-instagram" aria-hidden="true" />
                             </a>
                         </div>
                        </div>
                    </cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;