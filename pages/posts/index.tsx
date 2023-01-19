import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/posts-util";
import { Posts } from "../index";

const AllPostsPage = ({ posts }: { posts: Posts[] }) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
