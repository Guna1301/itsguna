import { navigation } from "@/data/navigation";
import { NavItem } from "./NavItem";

export function DesktopNav() {
  return (
    <nav
      className="group hidden items-center gap-8 md:flex"
      aria-label="Primary navigation"
    >
      {navigation.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </nav>
  );
}