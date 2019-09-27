import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {store} from './store/store';
import {store} from './store';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import * as serviceWorker from './serviceWorker';


// export const store = applyMiddleware(thunk, logger)(createStore)(rootReducer);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
document.getElementById('root'));

