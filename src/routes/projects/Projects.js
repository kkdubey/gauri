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
import s from './Projects.css';
import history from '../../core/history';
import { Carousel, Item, Caption} from 'react-bootstrap';

var fn = function () {
  /* do you want */  
}

const projects = [
  {
    imagePath: 'img1.jpg',
    imageLabel: 'First slide label',
    imageDetails: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    margin: '5px',
    padding: 'auto',
  }
];

class Projects extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    // news: PropTypes.arrayOf(PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   link: PropTypes.string.isRequired,
    //   content: PropTypes.string,
    // })).isRequired,
    //{history.location.search.split('=')[0].substring(1)} - {history.location.search.split('=')[1]}
  };
  render() {
    console.log(history);
    return (
      <div className={s.root}>
        <div >
          <h1>Projects</h1> 
          <Carousel interval="10000000">
            <Carousel.Item  className={s.item}>
              <img alt="900x500" src="img1.jpg" className={s.imgstyle}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.item}>
              <img  alt="900x500" src="img2.jpg" className={s.imgstyle}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className={s.item}>
              <img  alt="900x500" src="img3.jpg" className={s.imgstyle}/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Projects);
