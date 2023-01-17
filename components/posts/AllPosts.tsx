import classes from "./AllPosts.module.css";
import PostsGrid from "./PostsGrid";
import { Post } from "../home-page/FeaturedPosts";

const AllPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
