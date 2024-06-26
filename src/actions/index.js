import { 
  SET_RECENT_POSTS,
  SET_RESULTS_POSTS
 } from './types';
import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.getUri('https://api.dailysmarty.com/posts') //Why did VSC put Uri on get request?
        .then(response => {
          dispatch({
            type: SET_RECENT_POSTS,
            payload: response.data.posts
          })
        })
    }
}

export function fetchPostsWithQuery(query, callback) {
  return function(dispatch) {
      axios.getUri(`https://api.dailysmarty.com/search?q=${query}`)
      .then(response => {
        dispatch({
          type: SET_RESULTS_POSTS,
          payload: response.data.posts
        })
        if (callback) { callback() }
      })
  }
}