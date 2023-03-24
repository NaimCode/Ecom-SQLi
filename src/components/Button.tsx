import cx from "classnames";
import { motion } from "framer-motion";

type ButtonAnimationProps = {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};
function Button({
  children,
  type,
  animation,
}: {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  animation?: ButtonAnimationProps;
}) {
  return (
    <motion.button
      initial={{
        opacity: 0,
        x: animation?.x ? animation.x : 0,
        y: animation?.y ? animation.y : 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: animation?.duration || 0.5,
        delay: animation?.delay || 0,
      }}
      className={cx(
        "border-transparent border-2 hover:scale-105  hover:bg-opacity-0 py-4 px-16  font-semibold text-xs",
        type === "secondary"
          ? "hover:border-text hover:text-text bg-primary text-white"
          : "hover:border-white hover:text-white bg-white text-text"
      )}
    >
      {children}
    </motion.button>
  );
}

export default Button;
