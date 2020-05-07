import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Mymodal from './mymodal';

class Contact extends Component {
    render() {
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Obinna Daniel</h2>
                    <img
                    src="img/Gboy.jpg"
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Are you ready to enhance your online presence? contact me to share your ideas and requirements, and I will help you turn them into a reality. If you need help or have any questions you can follow me on Facebook or
							Instagram @ Obinna Daniel or you kindly inbox me</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                 <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="true"/>
               (+234) 812-5275966
                 </ListItemContent>
                 </ListItem>
                 <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-fax" aria-hidden="true"/>
               (+234) 816-7484600
                 </ListItemContent>
                 </ListItem>
                 <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="true"/>
                Obinnadaniel30@yahoo.com
                 </ListItemContent>
                 </ListItem>
                 <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fa fa-pen" aria-hidden="true"/>
                 <Mymodal name="leave a message" title="contact form">
                 <iframe title="contact form" src="https://docs.google.com/forms/d/e/1FAIpQLSfn3fSVf3f6YnwdA0tFSBu8lhFI6UjD1zsNxv1WlGQQnO-_iA/viewform?embedded=true" width="640" height="844" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                 </Mymodal>
                 </ListItemContent>
                 </ListItem>
                   </List>
                </div> 
       
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Contact;