import ReactMarkdown, { Components } from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = (props) => {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;
  const customRenderers = {
    img({ src, alt }) {
      return (
        <Image
          src={`/images/posts/${props.post.slug}/${src}`}
          alt={alt || "alt"}
          width={600}
          height={300}
        />
      );
    },
    code(code) {
      const { className, children } = code;
      const language = className?.split("-")[1];

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          // children={children}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {props.post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
