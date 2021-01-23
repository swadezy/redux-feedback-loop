import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review.jsx/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />

        <Route path="/" exact component={Feeling} />
        <Route path="/1" component={Understanding} />
        <Route path="/2" component={Support} />
        <Route path="/3" component={Comment} />
        <Route path="/4" component={Review} />
        <Route path="/5" component={Success} />
        <Route path='/admin' component={Admin} />

      </div>
    </Router>
  );
}

export default App;
