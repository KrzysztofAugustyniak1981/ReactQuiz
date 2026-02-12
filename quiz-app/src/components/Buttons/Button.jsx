import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick = () => {},
  className = "",
  disabled = false,
  ...rest
}) => {
  const buttonClass = [styles.btn, styles[className]].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
      {...rest} // Dodatkowe propsy (redit)
    >
      {children}
    </button>
  );
};

export default Button;
