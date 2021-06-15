exports.onRouteUpdate = function({ location }) {
  // 06/15/2021 - Making a no-op to troubleshoot analytics counting per marketing.
  // Don't track while developing.
  // if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
  //   fbq('track', 'ViewContent');
  // }  
};
