import React from "react";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>My Website About Page</title>
        <meta name="desction" content="This is my about page and is about us" />
        <link rel="cannonical" href="/about" />
      </Helmet>

      <main>
        <h2>Lear About us</h2>
        <p>Lovely site here </p>
      </main>
    </>
  );
}
