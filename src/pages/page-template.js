import React from "react";
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const template = ({ pageContext }) => {
  console.log(pageContext);
  const document = {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value: "Hello world!",
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };
  console.log(JSON.parse(pageContext))
  console.log(documentToReactComponents(document));

  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      {pageContext.content.raw}
      {documentToReactComponents(document)}
      {/* {documentToReactComponents(pageContext.content.raw)} */}
    </Layout>
  );
};

export default template;
