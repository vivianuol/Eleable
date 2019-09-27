import { createStore, combineReducers, applyMiddleware } from "redux";
import {user, contacts, contact, notice} from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createBrowserHistory} from "history";
import { createReduxHistoryContext } from "redux-first-history";


const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history: createBrowserHistory()
  //others options if needed 
});


export const store = applyMiddleware(thunk, logger)(createStore)(
  combineReducers({
    router: routerReducer,
    user,
    contacts,
    contact,
    notice
  })
);

export const history = createReduxHistory(store);
