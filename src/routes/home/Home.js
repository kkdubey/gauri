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

const tilesData = [
  {
    img: 'nature-600-337.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'nature-600-337.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'nature-600-337.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'nature-600-337.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'nature-600-337.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'nature-600-337.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'nature-600-337.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'nature-600-337.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
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

  render() {
    return (
      <div className={s.root}>
        <GridList
          cols={3}
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>December</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
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
