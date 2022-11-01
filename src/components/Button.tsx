import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isMarked?: boolean;
  isInvisible?: boolean;
  isGray?: boolean;
  isOutlined?: boolean;
};

export function Button({
  isOutlined = false,
  isMarked = false,
  isInvisible = false,
  isGray = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button ${
        isOutlined
          ? "outlined"
          : "" || isMarked
          ? "marked"
          : "" || isInvisible
          ? "invisible"
          : "" || isGray
          ? "gray"
          : ""
      }`}
      {...props}
    />
  );
}
