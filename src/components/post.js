import React, { Component } from "react";

class Post extends Component {

    renderTopic() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}</span>
        })
        return topics;
    }

    renderLinks() {
        let links = this.props.post_links.map((post_link, index) => {
            return (
                <div className="post-link" key={index}>
                    <div className="post-link__box"></div>
                    <div className="postlink__link">
                        <a href={post_link.link_url}>Useful Link #{index + 1}</a>
                    </div>
                </div>
            )
        })
        return links;
    }

    render() {
        if(this.props.type == 'recent') {
            return (
                <li className="recent-post">
                    <div className="recent-posts__title">
                        {this.props.title}
                    </div>
                    <div className="recent-post__topics">
                        {this.renderTopics()}
                    </div>
                </li>
            )
        }else if(this.props.type == 'result') {
            return (
                <li className="result-post">
                    <div className="result-post__topics">
                        {this.renderTopics()}
                    </div>
                    <div className="result-post__title">
                        {this.props.title()}
                    </div>
                    <div className="result-post__links">
                        {this.renderLinks()}
                    </div>
                </li>
            )
        }
    } 

}

export default Post;