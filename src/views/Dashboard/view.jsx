import React, { useState } from 'react';
import { Tab, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import sortBy from 'lodash/sortBy';
import { FETCH_BUSINESSES } from '../../graphql/business';
import { Navbar, LoadSpinner } from '../../components';
import { Editor, AppsHome } from './components';
import { StyledPageWrapper } from './style';

const DashboardPage = ({ uid }) => {
  const [activePaneKey, setActivePaneKey] = useState('editor');
  const [availableContent, setAvailableContent] = useState([]);
  const [activeContentData, setActiveContentData] = useState({});

  // fetch all businesses associated with the current user.
  // when complete, update state with sorted businesses.
  const { loading: businessesAreLoading } = useQuery(FETCH_BUSINESSES, {
    variables: { where: { users: { id: uid } } },
    onCompleted: ({ businesses }) => {
      const sorted = sortBy(businesses, 'name');
      setAvailableContent(sorted);
      setActiveContentData(sorted[0]);
    },
  });

  const refreshContent = (updated) => {
    const newActive = { ...activeContentData, ...updated };
    const newAvailable = availableContent.map((obj) => (obj.id === newActive.id ? newActive : obj));
    setActiveContentData(newActive);
    setAvailableContent(sortBy(newAvailable, 'name'));
  };

  const isLoading = businessesAreLoading;

  return (
    <Col className="p-0 h-100">
      <Tab.Container id="dashboard-tabs-container" activeKey={activePaneKey}>
        <StyledPageWrapper noGutters>
          <Navbar
            onSelectNavLink={(key) => setActivePaneKey(key)}
            activeKey={activePaneKey}
            activeContent={activeContentData}
            availableContent={availableContent}
            onSelectNewContent={(id) => {
              const nextContent = availableContent.find((i) => i.id === id);
              setActiveContentData(nextContent);
            }}
          />
          {/* primary content */}
          <Col className="h-100 pt-5" role="main">
            {isLoading ? (
              <LoadSpinner />
            ) : (
              <Tab.Content className="h-100 pt-5 overflow-auto">
                <Tab.Pane eventKey="apps">
                  <AppsHome />
                </Tab.Pane>
                <Tab.Pane eventKey="editor">
                  <Editor content={activeContentData} onUpdateComplete={refreshContent} />
                </Tab.Pane>
              </Tab.Content>
            )}
          </Col>
        </StyledPageWrapper>
      </Tab.Container>
    </Col>
  );
};

export default DashboardPage;
