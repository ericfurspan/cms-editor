import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toggle } from './components';
import { StyledDropdownItem } from './style';

const ContentDropdown = ({
  activeContent,
  availableContent = [],
  onSelectItem,
}) => {
  const hasMultipleItems = availableContent.length > 1;

  return (
    <Dropdown drop="down">
      <Dropdown.Toggle
        id="content-dropdown-toggle"
        as={Toggle}
        hasMultipleItems={hasMultipleItems}
      >
        <>
          <span>{activeContent.name}</span>
          {hasMultipleItems && (
            <FontAwesomeIcon
              size="1x"
              icon={['fas', 'angle-down']}
              className="ml-3"
            />
          )}
        </>
      </Dropdown.Toggle>

      {hasMultipleItems && (
        <Dropdown.Menu>
          {availableContent.map((content) => (
            <StyledDropdownItem
              key={content.id}
              eventKey={content.id}
              onSelect={onSelectItem}
              active={activeContent.id === content.id}
              name={content.name}
            >
              {content.name}
            </StyledDropdownItem>
          ))}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default ContentDropdown;
