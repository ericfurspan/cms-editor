import React, { useState } from 'react';
import { Row, Col, Tab, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import sortBy from 'lodash/sortBy';
import { FETCH_BUSINESSES } from '../../graphql/business';
import { LoadSpinner, ContentDropdown } from '../../components';
import { Navbar, Editor, Users, Home } from './components';

const DashboardPage = ({ uid }) => {
  const [activePaneKey, setActivePaneKey] = useState('editor');
  const [availableContent, setAvailableContent] = useState([]);
  const [activeContentData, setActiveContentData] = useState({});

  // fetch all businesses associated with the current user.
  // onComplete: set sorted businesses to state
  const { loading: businessesAreLoading } = useQuery(FETCH_BUSINESSES, {
    variables: { where: { users: { id: uid } } },
    onCompleted: ({ businesses }) => {
      const sorted = sortBy(businesses, 'name');
      setAvailableContent(sorted);
      setActiveContentData(sorted[0]);
    },
  });

  const afterContentUpdate = (updated) => {
    const updatedContent = {
      ...activeContentData,
      ...updated,
    };
    const updatedAvailable = availableContent.map((obj) =>
      obj.id === updatedContent.id ? updatedContent : obj
    );
    setActiveContentData(updatedContent);
    setAvailableContent(sortBy(updatedAvailable, 'name'));
  };

  if (businessesAreLoading) {
    return <LoadSpinner />;
  }

  return (
    <Container fluid className="p-0">
      <Tab.Container id="dashboard-tabs-container" activeKey={activePaneKey}>
        <Row noGutters>
          <Navbar onSelectNavLink={(key) => setActivePaneKey(key)} />

          <Col className="bg-white">
            <Row className="pt-1 pr-2 pb-0 pl-1 m-auto align-items-center justify-content-between">
              <ContentDropdown
                availableContent={availableContent}
                activeContent={activeContentData}
                onSelectItem={(id) => {
                  const nextContent = availableContent.find((i) => i.id === id);
                  setActiveContentData(nextContent);
                }}
              />
            </Row>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey="editor">
                <Editor
                  content={activeContentData}
                  onUpdateComplete={afterContentUpdate}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="users">
                <Users />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default DashboardPage;
