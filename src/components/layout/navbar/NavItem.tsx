import { NavLink } from "react-router-dom";
import type { NavigationItem } from "@/types/navigation";

interface NavItemProps {
  item: NavigationItem;
  mobile?: boolean;
  onClick?: () => void;
}

export function NavItem({ item, mobile = false, onClick }: NavItemProps) {
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        [
          mobile
            ? "block py-2 text-base"
            : "relative inline-flex py-1 text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-foreground after:transition-transform after:duration-300",
          "transition-colors duration-200",
          isActive
            ? "text-foreground after:scale-x-100 group-hover:after:scale-x-0"
            : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100",
        ].join(" ")
      }
    >
      {item.label}
    </NavLink>
  );
}