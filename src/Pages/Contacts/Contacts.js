import React from "react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>My Website contacts</title>
        <meta
          name="description"
          content="This is the contact page of my website"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main>
        <h2> to get in touch use these contacts</h2>
        <p> our telephone numbers are 0101252222</p>
      </main>
    </>
  );
}
