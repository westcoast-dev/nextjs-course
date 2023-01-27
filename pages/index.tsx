import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

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
      <Head>WestCoast' Blog</Head>
      <meta
        name="description"
        content="I post about programing and web deveplopment."
      />
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
