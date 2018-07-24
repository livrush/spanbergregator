import React from 'react';
import moment from 'moment';

const Tweet = ({ tweet }) => (
    <li className="article list-group-item">
        <div className="row">
            <div className="col-2">
                <img className="article-img" alt="Tweet Img" src={tweet.user.profile_image_url} />
            </div>
            <div className="col-10">
                <p> { tweet.text } </p>
                <div className="d-flex justify-space-around">
                    <p> <i className="fas fa-heart"></i> { tweet.favorite_count } </p>
                    <p> <i className="fas fa-retweet"></i> { tweet.retweet_count } </p>
                    <p> { moment(tweet.created_at).format("dddd, MMMM Do") } </p>
                    <p> { moment(tweet.created_at).format("h:mm:ssa") } </p>
                </div>
            </div>
        </div>
    </li>
);

export default Tweet;