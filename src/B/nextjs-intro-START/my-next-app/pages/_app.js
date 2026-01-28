// Think of the _app.js as the "main" entry point to your
// application for NextJS. The default function exported
// her is called App, and NextJS is going to "look" for
// this component as the "starting point" for our web app.
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
