import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8b8f49cb6652dfd9e4b77a7117d3dcf8@o4509124626481152.ingest.de.sentry.io/4509124644372560",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});