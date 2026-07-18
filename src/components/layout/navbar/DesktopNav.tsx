import { navigation } from "../../../data/navigation";

export function DesktopNav() {
	return (
		<nav className="hidden items-center gap-8 md:flex">
			{navigation.map((item) => (
				<a
					key={item.label}
					href={item.href}
					className="text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					{item.label}
				</a>
			))}
		</nav>
	);
}
