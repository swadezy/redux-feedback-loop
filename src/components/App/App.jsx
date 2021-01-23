import React from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review.jsx/Review';
import Success from '../Success/Success';

import {HashRouter as Router, Route, Link} from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <Header />
      <Feeling />
      <Understanding />
      <Support />
      <Comment />
      <Review />
      <Success />
    </div>
  );
}

export default App;
