import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';
import { SET_RECENT_POSTS } from './types';
import axios from 'axios';

const rootReducer = combineReducers({
  Form
});

export default rootReducer;

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.getUri('https://api.dailysmarty.com/posts') //Why did VSC put Uri on get request?
    .then(response => {
      console.log(response.data.posts);
      dispatch({
        type: SET_RECENT_POSTS,
        payload: response.data.posts
      })
    })
  }
}