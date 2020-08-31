import React from 'react';
import { StyledLoader } from './style';

/**
 * Returns an SVG placeholder for content using https://github.com/danilowoz/create-content-loader
 * @param {String} loadingMessage
 * @param {Boolean} animate
 * @param {Number} speed
 */
const ContentLoader = ({ loadingMessage = 'Loading...', animate = true, speed = 1.5 }) => (
  <StyledLoader animate={animate} title={loadingMessage} speed={speed}>
    <rect x="48" y="8" rx="3" ry="3" width="20%" height="6" />
    <rect x="48" y="26" rx="3" ry="3" width="32%" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="90%" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="80%" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="50%" height="6" />

    <path d="M19 3l16.4544827 9.5v19L19 41 2.54551733 31.5v-19z" />
    <path d="M19 18l3.4641016 2v4L19 26l-3.4641016-2v-4z" />
    <path d="M19 1l18.1865335 10.5v21L19 43 .81346652 32.5v-21z" />
    <path d="M22.4593034 20.5737122l12.9932598-7.4924743v17.8392638l-12.9932598-7.4839896z" />
    <path d="M18.5 3h1v38h-1z" />
    <path d="M35.20448249 12.06698756l.5.8660254-16.45448268 9.5-.5-.8660254z" />
    <path d="M35.70448219 31.06698756l-.5.8660254-16.45448268-9.5.5-.8660254z" />
  </StyledLoader>
);

export default ContentLoader;
