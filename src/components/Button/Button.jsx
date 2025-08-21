import { clsx } from "clsx"
import "./Button.scss"

export const Button = ({variant = "default", children, ...props }) => {
  return (
    <button
    {...props}
    className={clsx(
      "button",
      {
        "btn_shop": variant === "shop"
      }
    )}
    >
      {children}
    </button>
  )
}
