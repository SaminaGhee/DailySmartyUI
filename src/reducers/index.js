import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';
// import Post from './post';



const rootReducer = combineReducers({
  Form,
  post
});

export default rootReducer;
