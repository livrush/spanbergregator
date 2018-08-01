import React from 'react';
import moment from 'moment';
import bb from 'billboard.js';

const Finance = ({ data }) => {
  console.log(data);
  setTimeout(function() {
    var bar = bb.generate({
      bindto: `#${data.id}-breakdown`,
      data: {
        type: 'bar',
        columns: [
          ['Total Contributions', data.total_contributions],
          ['Total Disbursements', data.total_disbursements],
          ['Independent Expenditures', data.independent_expenditures]
        ]
      }
    });

    var usage = bb.generate({
      bindto: `#${data.id}-usage`,
      data: {
        type: 'donut',
        columns: [
          ['Available', data.total_contributions - data.total_disbursements],
          ['Disbursed', data.total_disbursements]
        ],
        colors: {
          Available: '#28a745',
          Disbursed: '#dc3545'
        }
      }
    });

    var pie = bb.generate({
      bindto: `#${data.id}-total-from`,
      data: {
        type: 'donut',
        columns: [
          ['Individuals', data.total_from_individuals],
          ['PACs', data.total_from_pacs]
        ],
        colors: {
          Individuals: '#1b4062',
          PACs: '#8DC6E8'
        }
      },
      interaction: {
        enabled: false
      }
    });

    console.log(bar);
  });

  return (
    <div className="container">
      <a href="">{data.name}</a>
      <div class="row">
        <div class="col-6 text-left font-weight-bold">
          Begin {moment(data.date_coverage_from).format('MM/DD/YY')}:
        </div>
        <div class="col-6 text-right">${data.begin_cash}</div>
      </div>
      <div class="row">
        <div class="col-6 text-left font-weight-bold">
          End {moment(data.date_coverage_to).format('MM/DD/YY')}:
        </div>
        <div class="col-6 text-right">${data.end_cash}</div>
      </div>
      <h2>Contributions</h2>
      {/* <div id={data.id + "-breakdown"} /> */}
      <div id={data.id + '-usage'} />

      <div className="row">
        <div className="col-6 font-weight-bold text-left">
          Total
          <span className="text-success font-weight-bold"> Contributions:</span>
        </div>
        <div className="col-6 text-right">${data.total_contributions}</div>
      </div>
      <div className="row">
        <div className="col-6 font-weight-bold text-left">
          Total
          <span className="text-danger font-weight-bold"> Disbursements:</span>
        </div>
        <div className="col-6 text-right">${data.total_disbursements}</div>
      </div>
      <div className="row">
        <div className="col-6 font-weight-bold text-left">
          Total
          <span className="text-success font-weight-bold"> Available:</span>
        </div>
        <div className="col-6 text-right">
          ${(data.total_contributions - data.total_disbursements).toFixed(2)}
        </div>
      </div>
      <div className="row">
        <div className="col-6 font-weight-bold text-left">
          Independent Expenditures:
        </div>
        <div className="col-6 text-right">${data.independent_expenditures}</div>
      </div>
      <div id={data.id + '-total-from'} />
    </div>
  );
};

export default Finance;
