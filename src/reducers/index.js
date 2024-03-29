import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';

const rootReducer = combineReducers({
  Form
});

export default rootReducer;

export function fetchRecentPosts() {
  return function(dispatch) {
    // perform our request in here.
    console.log('hello');
  }
}