// lambda/redirect/index.
// Source https://www.skies.dev/aws-gatsby

/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

exports.handler = (event, context, callback) => {
  const { request } = event.Records[0].cf;
  const { uri } = request;
  const host = request.headers.host[0].value;
  const { querystring } = request;

  // Make sure the URL starts with "www." and ends with "/"
  if (!host.startsWith('www.') || !uri.endsWith('/')) {
    let newUrl = 'https://www.my-template-site.com';

    // Add path
    if (uri) newUrl += uri;

    // Add trailing slash
    if (!newUrl.endsWith('/')) newUrl += '/';

    // Add query string
    if (querystring && querystring !== '') newUrl += `?${querystring}`;

    const response = {
      status: '301',
      statusDescription: '301 Redirect for root domain',
      headers: {
        location: [
          {
            key: 'Location',
            value: newUrl,
          },
        ],
      },
    };

    callback(null, response);
  } else {
    callback(null, request);
  }
};