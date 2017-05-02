import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './about.css';
import { Grid, Row, Col } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class About extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div >
      	<h1>About Us</h1> 
        <Grid>
          <Row >
            <Col sm={12} md={6}>
              <img src="nature-600-337.jpg" className={s.img1} />
            </Col>
            <Col sm={12} md={6}>
            	<p>Design Touch was established in year 2013. The firm who handles a interior projects which includes
            	– Residential , Commercial , Retail spaces , etc. at important centers like Mumbai
            	, Navi Mumbai , Thane , Pune. We are passionate about our aesthetics ,
            	functionality and sensuality of using quality materials.
            		We strongly believe that clients satisfaction is our biggest reward and we
            	maintain a relationship – be it between a pace and furniture or even a designer
            	and client. It is a challenge to understand the whims and the choices of every
            	client and than create a space they can enjoy. This is the reason we give an
            	individuality to each project we take on…</p>
            </Col>
          </Row>
        </Grid>
        <List>
	        <Subheader>Meet Our Team</Subheader>
	        <ListItem
	          leftAvatar={<Avatar src="img1.jpg" />}
	          primaryText="Brunch this weekend?"
	          secondaryText={
	            <p>
	              <span style={{color: darkBlack}}>Brendan Lim</span> --
	              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
	            </p>
	          }
	          secondaryTextLines={2}
	        />
	        <Divider inset={true} />
	        <ListItem
	          leftAvatar={<Avatar src="img2.jpg" />}
	          primaryText={
	            <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
	          }
	          secondaryText={
	            <p>
	              <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
	              Wish I could come, but I&apos;m out of town this weekend.
	            </p>
	          }
	          secondaryTextLines={2}
	        />
	      </List>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(About);
