import React from "react";
import config from "../config";

import _ from 'lodash';

const Navbar = ({
  display,
  updateDisplay,
  queryPress,
  queryTwitter,
  queryPropublica,
  queryPropublicaFinance
}) => {
  const validateActiveButton = (display, displayInstance) => {
    if (display === displayInstance) return " active-media";
    return "";
  };

  const displayButton = (...args) => _.every(args) ? '' : 'd-none';

  return <div className="container">
      <ul className="nav nav-tabs border-bottom-0">
        <li className={'nav-item interactive ' + displayButton(config.candidateName)}>
          <a
            className={'nav-link text-primary border-primary border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'press-candidate')}
            onClick={() => updateDisplay('Press', config.candidateName, config.candidateName)}
            >
            <i className="fas fa-newspaper" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.opponentName)}>
          <a
            className={'nav-link text-danger border-danger border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'press-opponent')}
            onClick={() => updateDisplay('Press', config.opponentName, config.opponentName)}
          >
            <i className="fas fa-newspaper" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.candidateTwitter)}>
          <a
            className={'nav-link text-primary border-primary border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'twitter-candidate')}
            onClick={() => queryTwitter(config.candidateTwitter, 'candidate')}
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.opponentTwitter)}>
          <a
            className={'nav-link text-danger border-danger border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'twitter-opponent')}
            onClick={() => queryTwitter(config.opponentTwitter, 'opponent')}
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.candidateMemberId)}>
          <a
            className={'nav-link text-primary border-primary border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'propublica-candidate')}
            onClick={() => queryPropublica(config.candidateMemberId, 'candidate')}
          >
            <i className="fas fa-gavel" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.opponentMemberId)}>
          <a
            className={'nav-link text-danger border-danger border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'propublica-opponent')}
            onClick={() => queryPropublica(config.opponentMemberId, 'opponent')}
          >
            <i className="fas fa-gavel" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.candidateFECId, config.opponentFECId)}>
          <a
            className={'nav-link text-secondary border-secondary border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'finance')}
            onClick={queryPropublicaFinance}
          >
            <i className="fas fa-dollar-sign" />
          </a>
        </li>
      </ul>
    </div>;
};

export default Navbar;
