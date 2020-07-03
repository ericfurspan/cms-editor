const getBreakpoint = (value) =>
  window.getComputedStyle(document.documentElement).getPropertyValue(value);

export default {
  SMALL: getBreakpoint('--breakpoint-sm'),
  MEDIUM: getBreakpoint('--breakpoint-md'),
  LARGE: getBreakpoint('--breakpoint-lg'),
};
