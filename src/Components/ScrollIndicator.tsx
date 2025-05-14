import React from "react";
import {motion, useTransform} from "framer-motion";
import {useScroll} from "framer-motion";
import { line } from "motion/react-client";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <div className="h-[200vh] p-[20px]">
    <motion.div className="fixed top-0 left-0 h-[5px] bg-red-500" style={{
      width: lineWidth,
     transition: 'width 0.0s ease',
   }}/>

    <div className="mt-[50px]">
      {[...Array(100)].map((_, index) => (
        <p key={index} className="mt-[20px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus tenetur voluptatum cupiditate sit temporibus hic expedita minus sint similique perferendis obcaecati labore excepturi, accusamus autem pariatur explicabo. Tempore, sapiente facilis?
        </p>
        ))}
    </div>
  </div>;
};

export default ScrollIndicator;
