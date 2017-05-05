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

// var fn = function () {
//   /* do you want */  
// }

const projects = [
  {
    imagePath: 'img1.jpg',
    imageLabel: 'First slide label',
    imageDetails: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    margin: '5px',
    padding: 'auto',
  },
  {
    imagePath: 'img2.jpg',
    imageLabel: 'First slide label',
    imageDetails: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    margin: '5px',
    padding: 'auto',
  },
  {
    imagePath: 'img3.jpg',
    imageLabel: 'First slide label',
    imageDetails: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    margin: '5px',
    padding: 'auto',
  },
  {
    imagePath: 'img4.jpg',
    imageLabel: 'First slide label',
    imageDetails: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    margin: '5px',
    padding: 'auto',
  }
];

class Projects extends React.Component {
  
  render() {
    console.log(history);
    return (
      <div className={s.root}>
        <div >
          <h1>Projects</h1> 
          <Carousel interval={3000}>
            {projects.map((number) =>
              <Carousel.Item  className={s.item} key={number.imagePath}>
                <img alt="900x500" src={number.imagePath} className={s.imgstyle}/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Projects);
