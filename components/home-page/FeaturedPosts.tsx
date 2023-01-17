import classes from "./FeaturedPosts.module.css";
import PostsGrid from "../posts/PostsGrid";

export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
