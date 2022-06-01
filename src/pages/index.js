import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>저는 개츠비 튜토리얼에 따라 사이트를 만들고 있습니다.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
