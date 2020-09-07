import React from 'react';
import { StyledCol, StyledButton, StyledIcon } from './style';

const SaveUndoRow = ({ onUndo }) => {
  return (
    <StyledCol>
      <StyledButton type="button" size="sm" variant="secondary" onClick={onUndo}>
        <StyledIcon $size="1x" $iconName="undo-alt" />
        Reset
      </StyledButton>
      <StyledButton type="submit" size="sm" variant="success">
        <StyledIcon $size="1x" $iconName="save" />
        Save
      </StyledButton>
    </StyledCol>
  );
};

export default SaveUndoRow;
