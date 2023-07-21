import React from "react";

import Hero from "././components/Hero/Hero";

import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>My Website Home page</title>
        <meta name="description" content="My home page" />

        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <Hero />
        <h2>This is the home page</h2>
        <p> excellent home page</p>
      </main>
    </>
  );
}
