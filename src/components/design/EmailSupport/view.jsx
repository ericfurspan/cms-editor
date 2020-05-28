import React from 'react';
import { Badge } from 'react-bootstrap';

const EmailSupport = () => (
  <div>
    Having trouble? Email&nbsp;
    <Badge pill variant="secondary">
      <a href="mailto:admin@quanda.dev" className="text-white">
        admin@quanda.dev
      </a>
    </Badge>
  </div>
);

export default EmailSupport;
