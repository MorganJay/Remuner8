import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

function init() {
  Sentry.init({
    dsn:
      'https://9c444312f4d54de3a4306b09a00f0f23@o590602.ingest.sentry.io/5740250',
    integrations: [new Integrations.BrowserTracing()],
    release: 'remuner8@1.0.0',
    environment: process.env.NODE_ENV,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  });
}

function log(error) {
  //Sentry.captureException(error);
  console.error(error);
}

export default { init, log };
 