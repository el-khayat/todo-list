import { createStore,applyMiddleware } from "redux";

import logger from "redux-logger";
import rootReducer from './root-reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }

  const middlewares = [logger];

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  let store = createStore(persistedReducer,applyMiddleware(...middlewares))
  let persistor = persistStore(store)



// const store = createStore(rootReducer,applyMiddleware(...middlewares))



export { store,persistor} 