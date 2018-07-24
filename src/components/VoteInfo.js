import React from 'react';
import Vote from './Vote.js';

const VoteInfo = ({ votes }) => {
    console.log(votes);
    const voteDivs = votes.map(voteInfo =><Vote vote={voteInfo}></Vote>);
    return (
    <div className="vote-info list-group-item">
        <a href="https://www.govtrack.us/congress/members/david_brat/412605" target="_blank">
            <button className="btn btn-danger">GovTrack</button>
        </a>
        <ul>
            {voteDivs}
        </ul>
    </div>
)
};

export default VoteInfo;