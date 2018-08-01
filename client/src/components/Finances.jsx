import React from "react";
import moment from "moment";
import Finance from './Finance';

const Finances = ({ data }) => {
  const [candidate, opponent] = data;
  return (
  <div className="card py-4">
    <div className="row">
      <div className="col-12 col-sm-6">
        <Finance data={candidate}></Finance>
      </div>
      <div className="col-12 col-sm-6">
        <Finance data={opponent}></Finance>
      </div>
    </div>
  </div>
  )
};

export default Finances;
