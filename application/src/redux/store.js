import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {projects} from './reducers/projectsReducer';


const rootReducers = combineReducers({
  projects,
});

export const store = createStore(rootReducers, composeWithDevTools());
