import React from 'react';
import About from './About';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/about',

  async action() {
    return {
      title: 'React Starter Kit',
      component: <Layout><About /></Layout>,
    };
  },

};
