import { useState } from "react";
import { Menu } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavItem } from "./NavItem";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="h-4 w-4" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[18rem] border-border/60 bg-background/95 backdrop-blur-xl">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-6" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <NavItem key={item.label} item={item} mobile onClick={() => setOpen(false)} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}