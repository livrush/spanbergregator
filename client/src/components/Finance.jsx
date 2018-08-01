import React from "react";
import moment from "moment";
import bb from "billboard.js";

const Finance = ({ data }) => {
  console.log(data);
  setTimeout(function() {
    var bar = bb.generate({
      bindto: `#${data.id}-breakdown`,
      data: {
        type: "bar",
        columns: [
          ["Total Contributions", data.total_contributions],
          ["Total Disbursements", data.total_disbursements],
          ["Independent Expenditures", data.independent_expenditures]
        ]
      }
    });

    var pie = bb.generate({
      bindto: `#${data.id}-total-from`,
      data: {
        type: "donut",
        columns: [
          ["From Individuals", data.total_from_individuals],
          ["From PACs", data.total_from_pacs]
        ]
      }
    });

    console.log(bar);
  });

  return <div className="">
      <h1>{data.name}</h1>
      <div class="row">
        <div class="col-2 text-left">Begin:</div>
        <div class="col-4 text-right">${data.begin_cash}</div>
        <div class="col-4 text-left">
          on {moment(data.date_coverage_from).format("MM/DD/YY")}
        </div>
      </div>
      <div class="row">
        <div class="col-2 text-left">End:</div>
        <div class="col-4 text-right">${data.end_cash}</div>
        <div class="col-4 text-left">
          on {moment(data.date_coverage_to).format("MM/DD/YY")}
        </div>
      </div>
      <h2>Contributions</h2>
      {/* <div id={data.id + "-breakdown"} /> */}
      <p>
        <strong>Total Contributions:</strong> ${data.total_contributions}
      </p>
      <p>
        <strong>Total Disbursements:</strong> ${data.total_disbursements},
      </p>
      <p>
        <strong>Independent Expenditures</strong> ${data.independent_expenditures}
      </p>
      <div id={data.id + "-total-from"} />
    </div>;
};

export default Finance;
