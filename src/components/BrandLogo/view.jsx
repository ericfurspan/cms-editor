import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  brandRow: { width: 'fit-content' },
  brandTitle: { fontSize: '1.3rem' },
  brandIcon: { fontSize: '1.25rem' },
};

const BrandLogo = ({ withTitle }) => (
  <Col>
    <Row
      onClick={() => window.location.replace('/')}
      style={styles.brandRow}
      className="pointer align-items-center"
    >
      <FontAwesomeIcon
        color="var(--warning)"
        icon={['fas', 'tools']}
        style={styles.brandIcon}
      />
      {withTitle && (
        <span style={styles.brandTitle} className="text-white m-0 ml-1">
          CMS
        </span>
      )}
    </Row>
  </Col>
);

export default BrandLogo;
