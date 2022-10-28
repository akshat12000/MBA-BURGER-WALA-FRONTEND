import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/Founder.jpg";
import "../../styles/founder.scss";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={350} width={200} />
        <h3>Akshat Bhatnagar</h3>

        <p>
          Hey, Everyone I am Akshat Bhatnagar, the founder of MBA Burger Wala.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;