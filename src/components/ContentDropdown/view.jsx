import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Toggle } from './components';

const ContentDropdown = ({
  activeContent,
  availableContent = [],
  onSelectItem,
}) => (
  <Dropdown drop="down">
    <Dropdown.Toggle
      id="content-dropdown-toggle"
      as={Toggle}
      hasMultipleContent={availableContent.length > 1}
    >
      <span>{activeContent.name}</span>
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

export default ContentDropdown;
