import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Toggle, Menu } from './components';

const ContentSearch = ({
  activeContent,
  availableContent = [],
  onSelectItem,
}) => (
  <Dropdown>
    <Dropdown.Toggle as={Toggle} id="content-search">
      {activeContent.name}
    </Dropdown.Toggle>
    <Dropdown.Menu as={Menu}>
      {availableContent.map((content) => (
        <Dropdown.Item
          key={content.id}
          eventKey={content.id}
          onSelect={onSelectItem}
        >
          {content.name}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default ContentSearch;
