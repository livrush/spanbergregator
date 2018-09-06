import React from 'react';
import _ from 'lodash';

import NavTab from './subComponents/NavTab';

const Navbar = ({ config, display, updateDisplay }) => {
  const showTab = args => (_.every(args) ? '' : 'd-none');
  const setActiveTab = (display, displayInstance) => {
    if (display === displayInstance) return ' active-media';
    return '';
  };

  return (
    <div className="container">
      <ul className="aggregator-nav nav nav-tabs border-bottom-0">
        <NavTab
          displayType="Press"
          showTab={showTab}
          showCriteria={[config.demName]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.demName}
          icon="fas fa-newspaper"
          color="primary"
          partyType="DEM"
        />
        <NavTab
          displayType="Press"
          showTab={showTab}
          showCriteria={[config.repName]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.repName}
          icon="fas fa-newspaper"
          color="danger"
          partyType="REP"
        />

        <NavTab
          displayType="YouTube"
          showTab={showTab}
          showCriteria={[config.demYouTube]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.demYouTube}
          icon="fab fa-youtube"
          color="primary"
          partyType="DEM"
        />
        <NavTab
          displayType="YouTube"
          showTab={showTab}
          showCriteria={[config.repYouTube]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.repYouTube}
          icon="fab fa-youtube"
          color="danger"
          partyType="REP"
        />

        <NavTab
          displayType="Twitter"
          showTab={showTab}
          showCriteria={[config.demTwitter]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.demTwitter}
          icon="fab fa-twitter"
          color="primary"
          partyType="DEM"
        />
        <NavTab
          displayType="Twitter"
          showTab={showTab}
          showCriteria={[config.repTwitter]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.repTwitter}
          icon="fab fa-twitter"
          color="danger"
          partyType="REP"
        />

        <NavTab
          displayType="Propublica"
          showTab={showTab}
          showCriteria={[config.demMemberId]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.demMemberId}
          icon="fas fa-gavel"
          color="primary"
          partyType="DEM"
        />
        <NavTab
          displayType="Propublica"
          showTab={showTab}
          showCriteria={[config.repMemberId]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          query={config.repMemberId}
          icon="fas fa-gavel"
          color="danger"
          partyType="REP"
        />

        <NavTab
          displayType="Finance"
          showTab={showTab}
          showCriteria={[
            config.demFECId,
            config.repFECId,
            config.demCommitteeFECId,
            config.repCommitteeFECId
          ]}
          setActiveTab={setActiveTab}
          display={display}
          updateDisplay={updateDisplay}
          icon="fas fa-dollar-sign"
          color="secondary"
          partyType="BOTH"
        />
      </ul>
    </div>
  );
};

export default Navbar;
