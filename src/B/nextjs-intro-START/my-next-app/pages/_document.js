// The _document.js is the "general layout" document,
// as can be seen from the presence of the <Html> tag.
// This module exports a single function as the default.
// That default function returns JSX.
// JSX can include regular HTML tags (<body>) as well as
// custom components, like the <Html>, <Head>, etc.
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
