import PostItem from "./PostItem";
import { Post } from "../home-page/FeaturedPosts";
import classes from "./PostsGrid.module.css";

const PostsGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: Post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
