import React, { useState } from 'react';
import { Tab, Col } from 'react-bootstrap';
import { Navbar } from '../../components';
import { Businesses, Apps } from './components';
import { StyledPageWrapper } from './style';

const DashboardPage = ({ uid }) => {
  const [activePaneKey, setActivePaneKey] = useState('apps');

  return (
    <Col className="p-0 h-100">
      <Tab.Container id="dashboard-tabs-container" activeKey={activePaneKey}>
        <StyledPageWrapper noGutters>
          <Navbar onSelectNavLink={(key) => setActivePaneKey(key)} activeKey={activePaneKey} />
          <Col className="h-100 pt-5" role="main">
            <Tab.Content className="h-100 pt-5 overflow-auto">
              <Tab.Pane eventKey="content">
                <Businesses uid={uid} />
              </Tab.Pane>
              <Tab.Pane eventKey="apps">
                <Apps uid={uid} changePane={setActivePaneKey} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </StyledPageWrapper>
      </Tab.Container>
    </Col>
  );
};

export default DashboardPage;
