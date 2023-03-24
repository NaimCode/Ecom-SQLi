/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
type ImageSwitcherProps = {
  images: Array<string>;
  title: string;
};
function ImageSwitcher({ images, title }: ImageSwitcherProps) {
  const [front, setfront] = useState(0);
  return (
    <div className=" text-center space-y-[80px]">
      <h3>{title}</h3>
      <div onClick={()=>setfront(front===0?1:0)} className="bg-red-100 relative cursor-pointer"  >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="show case"
            className={cx(
              "absolute transition-all duration-500",
              front === index ? "top-5 left-5 z-10" : "-top-5 -left-5 z-[9]"
            )}
          />
        ))}

      </div>

    </div>
  );
}

export default ImageSwitcher;
