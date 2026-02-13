import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick = () => {},
  className = "",
  disabled = false,
  ...rest
}) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}
      disabled={disabled}
      {...rest} // Dodatkowe propsy (redit)
    >
      {children}
    </button>
  );
};

export default Button;
