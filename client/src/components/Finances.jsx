import React from "react";
import moment from "moment";
import Finance from './Finance';

const Finances = ({ data }) => {
  console.log(data);
  const [candidate, opponent] = data;
  return (
  <div className="card">
    <div className="row">
      <div className="col-6">
        <Finance data={candidate}></Finance>
      </div>
      <div className="col-6">
        <Finance data={opponent}></Finance>
      </div>
    </div>
  </div>
  )
};

export default Finances;
