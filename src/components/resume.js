import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
             <Grid>
                 <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                       <img
                       src="img/dan.jpg"
                       alt="avatar"
                       style={{height: '200px'}}
                       />
                   </div>
                   <h2 style={{paddingTop: '2em'}}>Obinna Daniel</h2>
                   <h4 style={{color: 'grey'}}>Programmer</h4>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                   <p>My name is Obinna Daniel, I'm a programmer & a web design specialist based in lagos Nigeria. I specialize in designing and building custom websites from scratch; with very clean, very well-written code & my own tried and tested techniques. I'm driven to present you with the website that reflects your organization's identity.</p>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                   <h5>Address</h5>
                   <p>Lagos Nigeria</p>
                   <h5>Phone</h5>
                   <p>(+234) 812-5275966</p>
                   <h5>Email</h5>
                   <p>Obinnadaniel30@yahoo.com</p>
                   <h5>Web</h5>
                   <p>Dannydigital.com.ng</p>
                   <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                 </Cell>
                 <Cell className="resume-right-col" col={8}>
                     <h2>Education</h2>
                     <Education
                     startYear={2005}
                     endYear={2006}
                     schoolName="My University"
                     schoolDescription="
                     Abia State University, studied Engineering. "

                      />
                      <Education
                     startYear={2008}
                     endYear={2010}
                     schoolName="My 2nd University"
                     schoolDescription="
                     RamKanheng University Bangkok Thailand, Studied Computer Engineering. "
                     
                      />
                      <hr style={{borderTop: '3px solid #e22947'}} />
                      <h2>Experience</h2>
                       <Experience
                       startYear={2010}
                       endYear={2014}
                       jobName="First Job"
                       jobDescription="Engineering at SCG-Dow Group(Bangkok Office)Thailand. "

                       />
                       <Experience
                       startYear={2014}
                       endYear={2018}
                       jobName="Second Job"
                       jobDescription="Engineering at REDBERG(REDBERG Nigeria Limited)Lagos Nigeria. "
                       
                       />
                       
                      <hr style={{borderTop: '3px solid #e22947'}} />
                      <h2>Skills</h2>
                      <Skills
                      skill="Javascript"
                      progress={100}
                       />
                       <Skills
                      skill="HTML/CSS"
                      progress={80}
                       />
                       <Skills
                      skill="NodeJS"
                      progress={60}
                       />
                       <Skills
                      skill="React"
                      progress={50}
                       />
                 </Cell>
             </Grid>   
            </div>
        )
    }
}

export default Resume;