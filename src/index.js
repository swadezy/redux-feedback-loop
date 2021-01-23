import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feelingReducer = (state = 0, action) => {
    return state;
}

const understandingReducer = (state = 0, action) => {
    return state;
}

const supportReducer = (state = 0, action) => {
    return state;
}

const commentReducer = (state = 0, action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
