import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, 
    compose(
    applyMiddleware(logger,thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
 
const persistor = persistStore(store)

export { store, persistor }

//   const persistedReducer = persistReducer(persistConfig, rootReducer)

//   export default () => {
//     let store = createStore(persistedReducer,
//         // compose(
//         // applyMiddleware(logger,thunk),
//         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//         )
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }

// const store = createStore(rootReducer, 
//     compose(
//     applyMiddleware(logger,thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//     );

// export default store;