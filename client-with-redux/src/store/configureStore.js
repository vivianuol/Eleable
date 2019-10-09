import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 // defaults to localStorage for web
 
import {store} from './index';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export default () => {
    let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return persistor
}