import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feelingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        default:
            return state;
    }
}

const understandingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
}

const supportReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        default:
            return state;
    }
}

const commentReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            return action.payload;
        default:
            return state;
    }
}

const allFeedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
        allFeedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
