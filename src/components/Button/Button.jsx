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
        "btn_shop_black": variant === "shop_black",
        "btn_buy_now": variant === "buy_now",
        "btn_login": variant === "login",
        "btn_reg": variant === "registration",
        "btn_fav": variant === "favorites",
        "btn_card": variant === "card",
        "btn_not_found": variant === "not_found",
      }
    )}
    >
      {children}
    </button>
  )
}
