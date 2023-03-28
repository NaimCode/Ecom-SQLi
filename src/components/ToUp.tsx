import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";


function ToUp() {
    
  const { scrollY} = useScroll()
  const [visible,setVisible] = useState(false);
 
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest>800)setVisible(true)
    else setVisible(false)
  })
  return (
    <motion.div

       onClick={()=>{
              window.scrollTo({
                top:0,
                behavior:"smooth"
              })
       }}

        whileHover={{ scale: 1.1 }}
        animate={{scale:visible?1:0}}  className="fixed bottom-10 right-10 cursor-pointer z-50 drop-shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path d="M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 35.707031 28.707031 C 35.511719 28.902344 35.257813 29 35 29 C 34.742188 29 34.488281 28.902344 34.292969 28.707031 L 25 19.414063 L 15.707031 28.707031 C 15.316406 29.097656 14.683594 29.097656 14.292969 28.707031 C 13.902344 28.316406 13.902344 27.683594 14.292969 27.292969 L 24.292969 17.292969 C 24.683594 16.902344 25.316406 16.902344 25.707031 17.292969 L 35.707031 27.292969 C 36.097656 27.683594 36.097656 28.316406 35.707031 28.707031 Z"></path>
      </svg>
    </motion.div>
  );
}

export default ToUp;
