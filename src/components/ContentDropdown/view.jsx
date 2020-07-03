import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useMediaQuery } from 'beautiful-react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BREAKPOINTS from '../../utils/breakpoints';
import { Toggle } from './components';

const ContentDropdown = ({
  activeContent,
  availableContent = [],
  onSelectItem,
}) => {
  const isSmall = useMediaQuery(`(max-width: ${BREAKPOINTS.SMALL}`);

  return (
    <Dropdown drop="down">
      <Dropdown.Toggle
        id="content-dropdown-toggle"
        as={Toggle}
        hasMultipleContent={availableContent.length > 1}
        isSmall={isSmall}
      >
        {isSmall ? (
          <FontAwesomeIcon icon={['fas', 'ellipsis-v']} size="lg" />
        ) : (
          <span>{activeContent.name}</span>
        )}
      </Dropdown.Toggle>
      {availableContent.length > 1 && (
        <Dropdown.Menu>
          {availableContent.map((content) => (
            <Dropdown.Item
              key={content.id}
              eventKey={content.id}
              onSelect={onSelectItem}
              active={activeContent.id === content.id}
              name={content.name}
            >
              <div style={{ padding: '0.5em 0' }}>{content.name}</div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default ContentDropdown;
