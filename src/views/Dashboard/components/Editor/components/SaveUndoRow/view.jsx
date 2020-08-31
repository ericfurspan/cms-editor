import React from 'react';
import { StyledCol, StyledButton, StyledIcon } from './style';

const SaveUndoRow = ({ onUndo }) => {
  return (
    <StyledCol>
      <StyledButton type="button" size="sm" variant="secondary" $iconOnly onClick={onUndo}>
        <StyledIcon $iconName="undo-alt" />
        Undo
      </StyledButton>
      <StyledButton type="submit" size="sm" variant="success">
        <StyledIcon $iconName="save" />
        Save
      </StyledButton>
    </StyledCol>
  );
};

export default SaveUndoRow;
