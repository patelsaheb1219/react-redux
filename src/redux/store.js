// Module Import
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { count } from 'yargs';

// All reducer imports
import counter from './reducers/counter';

// React Store creation
const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;