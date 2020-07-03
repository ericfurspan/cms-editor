export const iconForType = (type) => {
  if (type === 'success') {
    return 'check-circle';
  }
  if (type === 'error') {
    return 'exclamation-triangle';
  }
  return 'info';
};
