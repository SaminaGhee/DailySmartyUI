import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchbar';

import * as actions from '../actions';

class RecentPosts extends Component { //why does mine say "RecentPosts" and max's says "SearchBar" this guy is confusing me...

    componentDidMount() {
        this.props.fetchRecentPosts();
    }
    render() {
        return (
                <div className="recent-posts">
                    <div className="recent-posts__wrapper">
                        <div className="recent-posts__heading">Recent Posts</div>
                        <ul className="recent-posts__posts">
                            <li>recent post 0</li>
                            <li>recent post 1</li>
                            <li>recent post 2</li>
                        </ul>
                    </div>

                </div>
        )
    }

}

export default connect(null, actions)(RecentPosts);