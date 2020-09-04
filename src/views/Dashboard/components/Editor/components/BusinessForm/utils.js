import upperFirst from 'lodash/upperFirst';

export const cleanLabel = (string) => upperFirst(string).replace('_', ' ');
export const cleanOperatingHourLabel = (label) => upperFirst(label.replace('_start', '').replace('_end', ''));
