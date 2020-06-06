import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  brandIcon: { fontSize: 21 },
  clickable: { cursor: 'pointer', width: 'fit-content' },
};

const BrandLogo = ({ withTitle }) => (
  <Col>
    <Row onClick={() => window.location.replace('/')} style={styles.clickable}>
      <FontAwesomeIcon
        color="var(--warning)"
        icon={['fas', 'tools']}
        style={styles.brandIcon}
      />
      {withTitle && <span className="text-white m-0 ml-1">WebManager</span>}
    </Row>
  </Col>
);

export default BrandLogo;
