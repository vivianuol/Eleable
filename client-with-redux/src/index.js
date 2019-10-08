import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {store} from './store/store';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import * as serviceWorker from './serviceWorker';


// export const store = applyMiddleware(thunk, logger)(createStore)(rootReducer);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root'));

