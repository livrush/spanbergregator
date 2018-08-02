import React from 'react';
import moment from 'moment';
import bb from 'billboard.js';

const Finance = ({ candidateInfo, committeeInfo }) => {
  console.log(candidateInfo);
  console.log(committeeInfo);
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
  });

  return <div className="container">
      <a href="">{committeeInfo.name}</a>
      <div className="w-100 border-bottom my-2" />
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Start {moment(committeeInfo.date_coverage_from).format('MM/DD/YY')}:
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(committeeInfo.begin_cash)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          End {moment(committeeInfo.date_coverage_to).format('MM/DD/YY')}:
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(committeeInfo.end_cash)}
        </div>
      </div>
      <div className="w-100 border-bottom my-2" />
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-success font-weight-bold">
            {' '}
            Contributions:
          </span>
        </div>
        <div className="col-12 col-md-6 text-right">
         <span className="text-success">${sanitizeNumber(committeeInfo.total_contributions)}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-info font-weight-bold">
            {' '}
            From Individuals:
          </span>
        </div>
        <div className="col-12 col-md-6 text-right">
         <span className="text-info">${sanitizeNumber(committeeInfo.total_from_individuals)}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-warning font-weight-bold">
            {' '}
            From PACs:
          </span>
        </div>
        <div className="col-12 col-md-6 text-right">
         <span className="text-warning">${sanitizeNumber(committeeInfo.total_from_pacs)}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-danger font-weight-bold">
            {' '}
            Disbursements:
          </span>
        </div>
        <div className="col-12 col-md-6 text-right">
         <span className="text-danger">${sanitizeNumber(committeeInfo.total_disbursements)}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-success font-weight-bold"> Available:</span>
        </div>
        <div className="col-12 col-md-6 text-right">
         <span className="text-success">${sanitizeNumber(
            committeeInfo.total_contributions -
            committeeInfo.total_disbursements
          )}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Independent Expenditures:
        </div>
        <div className="col-12 col-md-6 text-right">
         <span className="text-default">${sanitizeNumber(committeeInfo.total_independent_expenditures)}</span>
        </div>
      </div>
      <div className="w-100 border-bottom my-2" />








      <a href="">{candidateInfo.name}</a>
      <div className="w-100 border-bottom my-2" />
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Begin {moment(candidateInfo.date_coverage_from).format('MM/DD/YY')}:
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(candidateInfo.begin_cash)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          End {moment(candidateInfo.date_coverage_to).format('MM/DD/YY')}:
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(candidateInfo.end_cash)}
        </div>
      </div>
      <div className="w-100 border-bottom my-2" />
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-success font-weight-bold">
            {' '}
            Contributions:
          </span>
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(candidateInfo.total_contributions)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-danger font-weight-bold">
            {' '}
            Disbursements:
          </span>
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(candidateInfo.total_disbursements)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Total
          <span className="text-success font-weight-bold"> Available:</span>
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(
            candidateInfo.total_contributions -
            candidateInfo.total_disbursements
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 text-left font-weight-bold">
          Independent Expenditures:
        </div>
        <div className="col-12 col-md-6 text-right">
          ${sanitizeNumber(candidateInfo.independent_expenditures)}
        </div>
      </div>
      <div className="w-100 border-bottom my-2" />

      <h2>Usage</h2>
      <div id={candidateInfo.id + '-usage'} />
      <div className="w-100 border-bottom my-2" />
      <h2>Origin</h2>
      <div id={candidateInfo.id + '-total-from'} />
    </div>;
};

export default Finance;

const sanitizeNumber = x => {
  var parts = x
    .toFixed(2)
    .toString()
    .split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  parts[1] = parts[1].padEnd(2, 0);
  return parts.join('.');
};