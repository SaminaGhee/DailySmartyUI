import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';



const rootReducer = combineReducers({
  Form,
  posts
});

export default rootReducer;
