import React from 'react';

const Vote = ({ vote }) => {
    const generateVote = function(position) {
        if (position === 'Yes') {
            return (
                <span className="badge badge-pill badge-success position-absolute">
                    <h5 className="m-2"><i className="fas fa-check"></i></h5>
                </span>
            )
        } else if (position === 'No') {
            return (
                <span className="badge badge-pill badge-danger position-absolute">
                    <h5 className="m-2"><i className="fas fa-times"></i></h5>
                    {/* <i className="fas fa-times"></i> */}
                </span>
            );
        }
    };

    return (
        <li className="vote list-group-item position-relative">
            { generateVote(vote.position) }
            <h5><span className="text-primary">{ vote.bill.number }</span> { vote.bill.title }</h5>
            <p>{ vote.description }</p>
        </li>
    )
};

export default Vote;