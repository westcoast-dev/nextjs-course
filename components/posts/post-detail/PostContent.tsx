import ReactMarkdown, { Components } from "react-markdown";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  content: string;
  slug: string;
}

const PostContent = ({ post }: { post: Post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers: Components = {
    img({ src, alt }) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${src}`}
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
          children={children}
        ></SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
