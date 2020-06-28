export const themeForType = (type) => {
  if (type === 'success') {
    return 'bg-success';
  } else if (type === 'error') {
    return 'bg-danger';
  }
  return 'bg-light';
};

export const iconForType = (type) => {
  if (type === 'success') {
    return 'check-circle';
  } else if (type === 'error') {
    return 'exclamation-triangle';
  }
  return 'info';
};
