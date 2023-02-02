import PostContent from "@/components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { GetStaticProps } from "next";

interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  content: string;
  slug: string;
}

const PostDetailPage = ({ post }: { post: Post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
