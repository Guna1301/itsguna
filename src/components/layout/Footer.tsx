import { Container } from "@/components/common/Container";

export function Footer() {
    return (
        <footer className="bottom-0 items-end border-t border-border/70 py-8 md:py-10">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm font-medium text-foreground/60">
                        Learn. Build. Repeat.
                    </p>
                    
                    <p className="text-sm font-medium text-foreground/60">
                        © {new Date().getFullYear()} Guna Sai
                    </p>
                </div>
            </Container>
        </footer>
    );
}