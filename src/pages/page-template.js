import React from "react";
import Layout from "../components/Layout";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

const template = ({ pageContext }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // let { description, title, file } = node.data.target.fields
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  return (
    <Layout onRoot={false}>
      <h1>{pageContext.title}</h1>
      {pageContext.content?.raw &&
        documentToReactComponents(
          JSON.parse(pageContext?.content?.raw),
          options
        )}
    </Layout>
  );
};

export default template;
