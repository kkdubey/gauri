/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import history from '../../core/history';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';

const styles = {
  cardStyle: {
    width: '400px',
    height: '600px',
    float: 'left',
    margin: '5px',
    padding: 'auto',
  }
};

class Home extends React.Component {
  
  handleClick = (projectId) => {
    history.push('projects?projectId='+ projectId);
  }
  
  render() {
    return (
      <div className={s.root}>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4}>
              <Card className={s.cardStyle}>
                <CardHeader
                  title="Project type 1"
                />
                <CardMedia>
                  <img src="nature-600-337.jpg" />
                </CardMedia>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                <CardActions>
                  <FlatButton label="View Details" onTouchTap={this.handleClick.bind(this, 12)} />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Col>
            <Col sm={6} md={4}>
              <Card className={s.cardStyle}>
                <CardHeader
                  title="Project type 2"
                />
                <CardMedia>
                  <img src="nature-600-337.jpg" />
                </CardMedia>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                <CardActions>
                  <FlatButton label="View Details" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Col>
            <Col sm={6} md={4}>
              <Card className={s.cardStyle}>
                <CardHeader
                  title="Project type 3"
                />
                <CardMedia>
                  <img src="nature-600-337.jpg" />
                </CardMedia>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                <CardActions>
                  <FlatButton label="View Details" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Col>
            <Col sm={6} md={4}>
              <Card className={s.cardStyle}>
                <CardHeader
                  title="Project type 4"
                />
                <CardMedia>
                  <img src="nature-600-337.jpg" />
                </CardMedia>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                <CardActions>
                  <FlatButton label="View Details" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Col>
            <Col sm={6} md={4}>
              <Card className={s.cardStyle}>
                <CardHeader
                  title="Project type 5"
                />
                <CardMedia>
                  <img src="nature-600-337.jpg" />
                </CardMedia>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                <CardActions>
                  <FlatButton label="View Details" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Col>
            <Col sm={6} md={4}>
              <Card className={s.cardStyle}>
                <CardHeader
                  title="Project type 6"
                />
                <CardMedia>
                  <img src="nature-600-337.jpg" />
                </CardMedia>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                </CardText>
                <CardActions>
                  <FlatButton label="View Details" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Home);
