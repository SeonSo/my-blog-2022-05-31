import { Link } from "gatsby";
import React from "react";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <main>
        <title>{pageTitle}</title>
        <nav style={{ display: "flex", gap: 10 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test">Test</Link>
          <Link to="/test-space">TestSpace</Link>
        </nav>
        <div>
          <h1>{pageTitle}</h1>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
