/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";

import { motion } from "framer-motion";
type ImageSwitcherProps = {
  images: Array<string>;
  title: string;
};
function ImageSwitcher({ images, title }: ImageSwitcherProps) {
  const [front, setfront] = useState(0);
  return (
    <div className=" text-center space-y-[80px]">
      {/* <motion.h3
        initial={{ opacity: 0,y:40 }}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 0.5,delay:0.5 }}

      className="overflow-y-hidden">
        {title}
      </motion.h3> */}
      <motion.div  onMouseLeave={()=>setfront(front===0?1:0)}  onMouseEnter={()=>setfront(front===0?1:0)}  className="bg-red-100 relative cursor-pointer"  >
        {images.map((image, index) => (
          <motion.img
        
          whileInView={{ x: 0, y: 0, boxShadow: "1px 1px 5px 0.7px rgba(0, 0, 0, 0.2)",  }}
           initial={{ x:front!=index? 20:-20, y:front!=index? 20:-20, }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            key={index}
            src={image}
            alt="show case"
            className={cx(
              "absolute transition-all duration-500",
              front === index ? "top-5 left-5 z-10" : "-top-5 -left-5 z-[9]",{
                "blur":front!=index,
              }
            )}
          />
        ))}

      </motion.div>

    </div>
  );
}

export default ImageSwitcher;
