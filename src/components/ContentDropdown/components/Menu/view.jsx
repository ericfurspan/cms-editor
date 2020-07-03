import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

const Menu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-2 my-1 w-auto"
          placeholder="Filter content..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            ({ props }) => !value || props.name.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
export default Menu;
