import { clsx } from "clsx"
import "./Button.scss"

export const Button = ({variant = "default", children, ...props }) => {
  return (
    <button
    {...props}
    className={clsx(
      "button",
      {
        "btn_shop": variant === "shop",
        "btn_shop_black": variant === "shop_black"
      }
    )}
    >
      {children}
    </button>
  )
}
