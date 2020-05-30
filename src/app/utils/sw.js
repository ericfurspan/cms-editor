/* eslint-disable no-console */

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(() => {
        console.log('SW registered: ');
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
};
