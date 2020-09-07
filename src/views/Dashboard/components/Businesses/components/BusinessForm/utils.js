import upperFirst from 'lodash/upperFirst';
import startCase from 'lodash/startCase';

export const cleanLabel = (string) => startCase(string.replace('_', ' '));
export const cleanOperatingHourLabel = (label) => upperFirst(label.replace('_start', '').replace('_end', ''));
