import React, { useState } from 'react';
import { Row, Col, Tab } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import sortBy from 'lodash/sortBy';
import { FETCH_BUSINESSES } from '../../graphql/business';
import { AppHeader, LoadSpinner, ContentSearch } from '../../components';
import { Navbar, Editor, Users, Home } from './components';

const styles = { lightBorder: { borderRight: '1px solid var(--lighter)' } };

const DashboardPage = () => {
  const [activePaneKey, setActivePaneKey] = useState('editor');
  const [availableContent, setAvailableContent] = useState([]);
  const [activeContentData, setActiveContentData] = useState({});

  const { loading } = useQuery(FETCH_BUSINESSES, {
    onCompleted: (data) => {
      const sorted = sortBy(data.businesses, 'name');
      setAvailableContent(sorted);
      setActiveContentData(sorted[0]);
    },
  });

  if (loading) {
    return <LoadSpinner />;
  }

  return (
    <>
      <AppHeader />
      <Col
        md="2"
        className="pt-1 pb-1 mr-0 bg-light"
        style={styles.lightBorder}
      >
        <small className="text-muted">{activeContentData.__typename}</small>
        <ContentSearch
          availableContent={availableContent}
          activeContent={activeContentData}
          onSelectItem={(id) =>
            setActiveContentData(availableContent.find((i) => i.id === id))
          }
        />
      </Col>
      <Tab.Container
        id="dashboard-tabs-container"
        activeKey={activePaneKey}
        onSelect={setActivePaneKey}
      >
        <Row className="m-0" style={{ height: '100%' }}>
          <Navbar style={styles.lightBorder} />
          <Col md="8" className="pl-2">
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey="editor">
                <Editor content={activeContentData} />
              </Tab.Pane>
              <Tab.Pane eventKey="users">
                <Users />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default DashboardPage;
