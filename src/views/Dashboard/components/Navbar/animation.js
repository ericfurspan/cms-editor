export const animationVariants = {
  sidebar: {
    smallExpanded: {
      left: 0,
      maxWidth: 208,
      textAlign: 'start',
      position: 'absolute',
    },
    mediumCollapsed: {
      left: 0,
      maxWidth: 68,
      textAlign: 'center',
      position: 'relative',
    },
    mediumExpanded: {
      left: 0,
      maxWidth: 208,
      textAlign: 'start',
      position: 'relative',
    },
    defaultExpanded: {
      left: 0,
      maxWidth: 208,
      textAlign: 'start',
      position: 'relative',
    },
    defaultCollapsed: {
      left: 0,
      maxWidth: 68,
      textAlign: 'center',
      position: 'relative',
    },
    hidden: { left: -208, position: 'absolute' },
  },
  sidebarItem: {
    collapsed: { display: 'none', opacity: 0 },
    expanded: { display: 'initial', opacity: 1 },
  },
  hamburger: {
    visibleCollapsed: {
      display: 'block',
      left: 12,
    },
    visibleExpanded: {
      display: 'block',
      left: 208,
    },
    hidden: {
      left: 0,
      display: 'none',
    },
  },
};

export const useAnimatedSidebar = (isExpanded, isMedium, isSmall) => {
  if (isSmall && isExpanded) {
    return 'smallExpanded';
  }
  if (isSmall && !isExpanded) {
    return 'hidden';
  }
  if (isMedium && isExpanded) {
    return 'mediumExpanded';
  }
  if (isMedium && !isExpanded) {
    return 'mediumCollapsed';
  }
  if (isExpanded) {
    return 'defaultExpanded';
  }
  if (!isExpanded) {
    return 'defaultCollapsed';
  }
  return 'hidden';
};

export const useAnimatedHamburger = (isExpanded, isSmall) => {
  if (!isExpanded && isSmall) {
    return 'visibleCollapsed';
  }
  if (isExpanded && isSmall) {
    return 'visibleExpanded';
  }
  return 'hidden';
};
