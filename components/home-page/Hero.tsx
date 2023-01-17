import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Weco.png"
          alt="an image showing Weco"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm WestCoast</h1>
      <p>
        I blog about Web Development - especially frontend framework like
        React.js or Next.js
      </p>
    </section>
  );
};

export default Hero;
