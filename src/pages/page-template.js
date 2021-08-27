import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import React from "react";
import Layout from "../components/Layout";

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
        const image = pageContext.content.references.find(reference => reference.contentful_id === node.data.target.sys.id)
    
        return (
            <img height={image.fixed.height} width={image.fixed.width} src={image.fixed.src}/>
           
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
