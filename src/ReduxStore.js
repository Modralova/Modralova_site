import { createStore, combineReducers } from 'redux';
import {loginReducer} from './reducers';

const allReducers = combineReducers({

     loginReducer: loginReducer

})

const store = createStore(allReducers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )

 //console.log('Initial state: ', store.getState())
 store.getState()
 //store.subscribe(() => { console.log('Updated state: ', store.getState()) });
 store.subscribe(() => store.getState())


export default store
