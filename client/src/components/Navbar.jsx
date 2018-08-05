import React from "react";
import _ from 'lodash';

import NavTab from './subComponents/NavTab';

const Navbar = ({
  config,
  display,
  updateDisplay,
}) => {
  const showTab = (args) => _.every(args) ? '' : 'd-none';
  const setActiveTab = (display, displayInstance) => {
    if (display === displayInstance) return " active-media";
    return "";
  };

  return <div className="container">
      <ul className="nav nav-tabs border-bottom-0">
        <NavTab
          displayType="Press"
          showTab={showTab}
          showCriteria={[config.candidateName]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.candidateName}
          icon="fas fa-newspaper"
          color="primary"
          partyType="DEM"
        >
        </NavTab>
        <NavTab
          displayType="Press"
          showTab={showTab}
          showCriteria={[config.opponentName]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.opponentName}
          icon="fas fa-newspaper"
          color="danger"
          partyType="REP"
        >
        </NavTab>
        <NavTab
          displayType="Twitter"
          showTab={showTab}
          showCriteria={[config.candidateTwitter]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.candidateTwitter}
          icon="fab fa-twitter"
          color="primary"
          partyType="DEM"
        >
        </NavTab>
        <NavTab
          displayType="Twitter"
          showTab={showTab}
          showCriteria={[config.opponentTwitter]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.opponentTwitter}
          icon="fab fa-twitter"
          color="danger"
          partyType="REP"
        >
        </NavTab>

        <NavTab
          displayType="Propublica"
          showTab={showTab}
          showCriteria={[config.candidateMemberId]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.candidateMemberId}
          icon="fas fa-gavel"
          color="primary"
          partyType="DEM"
        >
        </NavTab>
        <NavTab
          displayType="Propublica"
          showTab={showTab}
          showCriteria={[config.opponentMemberId]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.opponentMemberId}
          icon="fas fa-gavel"
          color="danger"
          partyType="REP"
        >
        </NavTab>

        <NavTab
          displayType="Finance"
          showTab={showTab}
          showCriteria={[
            config.candidateFECId,
            config.opponentFECId,
            config.candidateCommitteeFECId,
            config.opponentFECId,
          ]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          icon="fas fa-dollar-sign"
          color="secondary"
          partyType="BOTH"
        >
        </NavTab>

      </ul>
    </div>;
};

export default Navbar;
