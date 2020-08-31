import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleButton = React.forwardRef(({ onClick }, ref) => (
  <Button variant="transparent" ref={ref} onClick={(e) => onClick(e)}>
    <FontAwesomeIcon icon={['fas', 'layer-group']} />
  </Button>
));

const ContentDropdown = ({ activeContent, availableContent = [], onSelectItem }) => {
  return (
    <Dropdown drop="down">
      <Dropdown.Toggle id="content-dropdown-toggle" as={ToggleButton} />
      <Dropdown.Menu>
        {availableContent.map((content) => (
          <Dropdown.Item
            key={content.id}
            eventKey={content.id}
            onSelect={onSelectItem}
            active={activeContent.id === content.id}
            name={content.name}
            className="d-flex pt-2 pb-2 align-items-baseline justify-content-between"
          >
            <span>{content.name}</span>
            {activeContent.id === content.id && (
              <FontAwesomeIcon icon={['fas', 'check-circle']} className="ml-1 text-light" />
            )}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ContentDropdown;
