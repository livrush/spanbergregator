import React, { Component } from 'react';
import moment from 'moment';
import bb from 'billboard.js';
import FinanceRow from './subComponents/FinanceRow';

class Finance extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { candidateInfo, committeeInfo } = this.props;
    bb.generate({
      bindto: `#${committeeInfo.id}-stats`,
      data: {
        type: 'bar',
        columns: [
          ['Contributions', committeeInfo.total_contributions],
          ['Individuals', committeeInfo.total_from_individuals],
          ['PACs', committeeInfo.total_from_pacs],
          ['Disbursements', committeeInfo.total_contributions - committeeInfo.total_disbursements],
          ['Available', committeeInfo.total_disbursements],
          // ['Total Disbursements', committeeInfo.total_disbursements],
        ],
        colors: {
          Contributions: '#28a745',
          Individuals: '#17a2b8',
          PACs: '#ffc107',
          Disbursements: '#dc3545',
          Available: '#28a745',
        }
      },
      interaction: {
        enabled: false
      }
    });

    bb.generate({
      bindto: `#${committeeInfo.id}-usage`,
      data: {
        type: 'donut',
        columns: [
          [
            'Available',
            committeeInfo.total_contributions -
              committeeInfo.total_disbursements
          ],
          ['Disbursed', committeeInfo.total_disbursements]
        ],
        colors: {
          Available: '#28a745',
          Disbursed: '#dc3545'
        }
      },
      interaction: {
        enabled: false
      }
    });

    bb.generate({
      bindto: `#${candidateInfo.id}-usage`,
      data: {
        type: 'donut',
        columns: [
          [
            'Available',
            candidateInfo.total_contributions -
              candidateInfo.total_disbursements
          ],
          ['Disbursed', candidateInfo.total_disbursements]
        ],
        colors: {
          Available: '#28a745',
          Disbursed: '#dc3545'
        }
      },
      interaction: {
        enabled: false
      }
    });

    bb.generate({
      bindto: `#${candidateInfo.id}-origin`,
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
        enabled: false
      }
    });

    bb.generate({
      bindto: `#${committeeInfo.id}-origin`,
      data: {
        type: 'donut',
        columns: [
          ['Individuals', committeeInfo.total_from_individuals],
          ['PACs', committeeInfo.total_from_pacs]
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
  }

  render() {
    const { candidateInfo, committeeInfo } = this.props;

    console.log(candidateInfo);
    console.log(committeeInfo);

    return <div className="container">
        <a href={committeeInfo.fec_uri} target="_blank">
          {committeeInfo.name}
        </a>
        <div className="w-100 border-bottom my-2" />

        <FinanceRow
          prefix="Start"
          title={moment(committeeInfo.date_coverage_from).format('MM/DD/YY')}
          amount={committeeInfo.begin_cash}
          color={null}
        ></FinanceRow>
        <div className="row">
          <div className="col-12 col-md-6 text-left font-weight-bold">
            End {moment(committeeInfo.date_coverage_to).format('MM/DD/YY')}:
          </div>
          <div className="col-12 col-md-6 text-right">
            ${sanitizeNumber(committeeInfo.end_cash)}
          </div>
        </div>
        <div className="w-100 border-bottom my-2" />

        <h2>Stats</h2>
        <div id={`${committeeInfo.id}-stats`} />
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
            <span className="text-success">
              ${sanitizeNumber(committeeInfo.total_contributions)}
            </span>
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
            <span className="text-info">
              ${sanitizeNumber(committeeInfo.total_from_individuals)}
            </span>
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
            <span className="text-warning">
              ${sanitizeNumber(committeeInfo.total_from_pacs)}
            </span>
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
            <span className="text-danger">
              ${sanitizeNumber(committeeInfo.total_disbursements)}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 text-left font-weight-bold">
            Total
            <span className="text-success font-weight-bold">
              {' '}
              Available:
            </span>
          </div>
          <div className="col-12 col-md-6 text-right">
            <span className="text-success">
              ${sanitizeNumber(
                committeeInfo.total_contributions -
                  committeeInfo.total_disbursements
              )}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 text-left font-weight-bold">
            Independent Expenditures:
          </div>
          <div className="col-12 col-md-6 text-right">
            <span className="text-default">
              ${sanitizeNumber(
                committeeInfo.total_independent_expenditures
              )}
            </span>
          </div>
        </div>
        <div className="w-100 border-bottom my-2" />

        <h2>Usage</h2>
        <div id={committeeInfo.id + '-usage'} />
        <div className="w-100 border-bottom my-2" />
        <h2>Origin</h2>
        <div id={committeeInfo.id + '-origin'} />
        <div className="w-100 border-bottom my-2" />

        <a href={candidateInfo.fec_uri} target="_blank">
          {candidateInfo.name}
        </a>
        <div className="w-100 border-bottom my-2" />
        <div className="row">
          <div className="col-12 col-md-6 text-left font-weight-bold">
            Begin{' '}
            {moment(candidateInfo.date_coverage_from).format('MM/DD/YY')}:
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
            <span className="text-success font-weight-bold">
              {' '}
              Available:
            </span>
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
        <div id={candidateInfo.id + '-origin'} />
      </div>;
  }
}

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
