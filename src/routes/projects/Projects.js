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

class Projects extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    // news: PropTypes.arrayOf(PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   link: PropTypes.string.isRequired,
    //   content: PropTypes.string,
    // })).isRequired,
  };
  render() {
    console.log(history);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Projects</h1> 
          Projects :{history.location.search}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Projects);
