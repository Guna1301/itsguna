import { Container } from "@/components/common/Container";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Logo />

                    <div className="flex items-center gap-2 md:gap-6">
                        <DesktopNav />
                        <ThemeToggle />
                        <MobileNav />
                    </div>
                </div>
            </Container>
        </header>
	);
}
