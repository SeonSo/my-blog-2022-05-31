import React from "react";
import { Link } from "../components/head";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <title>홈</title>
      <Layout>
        <head />
        <h1>Home Page</h1>
      </Layout>
    </main>
  );
};

export default IndexPage;
