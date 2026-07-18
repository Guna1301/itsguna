import { Container } from "@/components/common/Container";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
			<Container>
				<div className="flex h-16 items-center justify-between">
					<Logo />
					<DesktopNav />
				</div>
			</Container>
		</header>
	);
}
