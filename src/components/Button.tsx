import cx from "classnames";

function Button({ children,type }: { children: React.ReactNode, type?: "primary" | "secondary" }) {
  return (
    <button className={cx("bg-opacity-100 transition-all duration-500 border-transparent border-2 hover:scale-105  hover:bg-opacity-0 py-4 px-16  font-semibold text-xs",type==="secondary"?"hover:border-text hover:text-text bg-primary text-white":"hover:border-white hover:text-white bg-white text-text")}>
      {children}
    </button>
  );
}

export default Button;
