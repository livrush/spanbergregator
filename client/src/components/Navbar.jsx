import React from "react";
import config from "../config";

import _ from 'lodash';

const Navbar = ({
  display,
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

  console.log(displayButton(config.candidateMemberId));
  return <div className="container">
      <ul className="nav nav-tabs border-bottom-0">
        <li className={'nav-item interactive ' + displayButton(config.candidateName)}>
          <a
            className={'nav-link text-primary border-primary border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'press-candidate')}
            onClick={() => queryPress(config.candidateName, 'candidate')}
          >
            <i className="fas fa-newspaper" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.opponentName)}>
          <a
            className={'nav-link text-danger border-danger border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'press-opponent')}
            onClick={() => queryPress(config.opponentName, 'opponent')}
          >
            <i className="fas fa-newspaper" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.candidateTwitter)}>
          <a
            className={'nav-link text-primary border-primary border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'twitter')}
            onClick={() => queryTwitter(config.candidateTwitter)}
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.opponentTwitter)}>
          <a
            className={'nav-link text-danger border-danger border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'twitter')}
            onClick={() => queryTwitter(config.opponentTwitter)}
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.candidateMemberId)}>
          <a
            className={'nav-link text-primary border-primary border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'propublica')}
            onClick={queryPropublica}
          >
            <i className="fas fa-gavel" />
          </a>
        </li>
        <li className={'nav-item interactive ' + displayButton(config.opponentMemberId)}>
          <a
            className={'nav-link text-danger border-danger border-bottom-0 bg-white mr-1' + validateActiveButton(display, 'propublica')}
            onClick={queryPropublica}
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
