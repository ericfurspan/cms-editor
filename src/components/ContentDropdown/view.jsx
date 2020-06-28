import React from 'react';
import { Dropdown, Badge } from 'react-bootstrap';
import { Toggle, Menu } from './components';

const styles = {
  dropdown: { textAlign: 'start' },
  dropdownItem: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '64px',
    padding: '12px 0',
    justifyContent: 'space-between',
  },
  dropdownBadge: { width: 'max-content' },
};

const ContentDropdown = ({
  activeContent,
  availableContent = [],
  onSelectItem,
}) => (
  <Dropdown drop="down" style={styles.dropdown}>
    <Dropdown.Toggle
      id="content-dropdown-toggle"
      as={Toggle}
      hasMultipleContent={availableContent.length > 1}
    >
      <span>{activeContent.name}</span>
    </Dropdown.Toggle>
    {availableContent.length > 1 && (
      <Dropdown.Menu as={Menu}>
        {availableContent.map((content) => (
          <Dropdown.Item
            key={content.id}
            eventKey={content.id}
            onSelect={onSelectItem}
            active={activeContent.id === content.id}
            name={content.name}
          >
            <div className="font-weight-bold" style={styles.dropdownItem}>
              {content.name}
              <span>
                <Badge pill variant="dark" style={styles.dropdownBadge}>
                  {content.__typename}
                </Badge>
              </span>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    )}
  </Dropdown>
);

export default ContentDropdown;
