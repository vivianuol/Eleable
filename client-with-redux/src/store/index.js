import { createStore, combineReducers, applyMiddleware } from "redux";
import {user, contacts, onecontact, notice} from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createBrowserHistory} from "history";
import { createReduxHistoryContext } from "redux-first-history";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session'


const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history: createBrowserHistory()
  //others options if needed 
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  router: routerReducer,
  user,
  contacts,
  onecontact,
  notice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

// let store = createStore(persistedReducer)
// let persistor = persistStore(store)

const storeFactory = () => applyMiddleware(thunk, routerMiddleware, logger)(createStore)(persistedReducer);

export const store = storeFactory();
export const persistor = persistStore(store);

export const history = createReduxHistory(store);
