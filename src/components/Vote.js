import React from 'react';

const Vote = ({ vote }) => (
    <li className="vote list-group-item">
        <h5><span className="text-primary">{ vote.bill.number }</span> { vote.bill.title }</h5>
        <p>{ vote.description }</p>
    </li>
);

export default Vote;