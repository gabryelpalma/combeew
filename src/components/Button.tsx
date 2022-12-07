import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isInvisible?: boolean;
  isGray?: boolean;
  isOutlined?: boolean;
  isCatalogo?: boolean;
};

export function Button({
  isOutlined = false,
  isInvisible = false,
  isGray = false,
  isCatalogo = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button ${
        isOutlined
          ? "outlined"
          : "" || isInvisible
          ? "invisible"
          : "" || isGray
          ? "gray"
          : "" || isCatalogo
          ? "catalogo"
          : ""
      }`}
      {...props}
    />
  );
}
