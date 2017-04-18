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
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import history from '../../core/history';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

const projectsData = [
  {
    projectId: 1,
    img: 'nature-600-337.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    projectId: 2,
    img: 'nature-600-337.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    projectId: 3,
    img: 'nature-600-337.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    projectId: 4,
    img: 'nature-600-337.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    projectId: 5,
    img: 'nature-600-337.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    projectId: 6,
    img: 'nature-600-337.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
];

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  handleClick = (project) => {
    history.push('projects?projectId='+ project.projectId);
  }

  render() {
    return (
      <div className={s.root}>
        <GridList
          cols={2}
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>December</Subheader>
          {projectsData.map((tile) => (
            <GridTile
              key={tile.projectId}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton onTouchTap={this.handleClick.bind(this, tile)}><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(s)(Home);
