import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "@/lib/posts-util";

export interface Posts {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
  slug: string;
}

const HomePage = ({ posts }: { posts: Posts[] }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
