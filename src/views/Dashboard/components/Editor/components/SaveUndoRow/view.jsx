import React from 'react';
import { StyledCol, StyledButton, StyledIcon } from './style';

const SaveUndoRow = ({ onUndo }) => {
  return (
    <StyledCol>
      <StyledButton type="button" size="sm" variant="secondary" $iconOnly onClick={onUndo}>
        <StyledIcon $size="1x" $iconName="undo-alt" $noSiblings />
      </StyledButton>
      <StyledButton type="submit" size="sm" variant="success" $iconOnly>
        <StyledIcon $size="1x" $iconName="save" $noSiblings />
      </StyledButton>
    </StyledCol>
  );
};

export default SaveUndoRow;
