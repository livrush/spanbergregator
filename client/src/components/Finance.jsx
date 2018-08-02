import React from 'react';
import moment from 'moment';
import bb from 'billboard.js';

const Finance = ({ candidateInfo, committeeInfo }) => {
  console.log(candidateInfo, committeeInfo);
  setTimeout(function() {
    var bar = bb.generate({
      bindto: `#${candidateInfo.id}-breakdown`,
      data: {
        type: 'bar',
        columns: [
          ['Total Contributions', candidateInfo.total_contributions],
          ['Total Disbursements', candidateInfo.total_disbursements],
          ['Independent Expenditures', candidateInfo.independent_expenditures]
        ]
      }
    });

    var usage = bb.generate({
      bindto: `#${candidateInfo.id}-usage`,
      data: {
        type: 'donut',
        columns: [
          ['Available', candidateInfo.total_contributions - candidateInfo.total_disbursements],
          ['Disbursed', candidateInfo.total_disbursements]
        ],
        colors: {
          Available: '#28a745',
          Disbursed: '#dc3545'
        }
      },
      interaction: {
        enabled: false,
      },
    });

    var pie = bb.generate({
      bindto: `#${candidateInfo.id}-total-from`,
      data: {
        type: 'donut',
        columns: [
          ['Individuals', candidateInfo.total_from_individuals],
          ['PACs', candidateInfo.total_from_pacs]
        ],
        colors: {
          Individuals: '#1b4062',
          PACs: '#8DC6E8'
        }
      },
      interaction: {
        enabled: false,
      },
    });

    console.log(bar);
  });

  return (
    <div className="container">
      <a href="">{candidateInfo.name}</a>
      <div className="w-100 border-bottom my-2"></div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Begin {moment(candidateInfo.date_coverage_from).format('MM/DD/YY')}:
        </div>
        <div className="col-12 col-md-6 text-right">${candidateInfo.begin_cash}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          End {moment(candidateInfo.date_coverage_to).format('MM/DD/YY')}:
        </div>
        <div className="col-12 col-md-6 text-right">${candidateInfo.end_cash}</div>
      </div>
      <div className="w-100 border-bottom my-2"></div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-success font-weight-bold"> Contributions:</span>
        </div>
        <div className="col-12 col-md-6 text-right">${candidateInfo.total_contributions}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-danger font-weight-bold"> Disbursements:</span>
        </div>
        <div className="col-12 col-md-6 text-right">${candidateInfo.total_disbursements}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-success font-weight-bold"> Available:</span>
        </div>
        <div className="col-12 col-md-6 text-right">
          ${(candidateInfo.total_contributions - candidateInfo.total_disbursements).toFixed(2)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Independent Expenditures:
        </div>
        <div className="col-12 col-md-6 text-right">${candidateInfo.independent_expenditures}</div>
      </div>
      <div className="w-100 border-bottom my-2"></div>

      <h2>Usage</h2>
      <div id={candidateInfo.id + '-usage'} />
      <div className="w-100 border-bottom my-2"></div>
      <h2>Origin</h2>
      <div id={candidateInfo.id + '-total-from'} />
    </div>
  );
};

export default Finance;
