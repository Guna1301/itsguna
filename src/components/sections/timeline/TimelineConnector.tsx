interface TimelineConnectorProps {
    isLast: boolean;
}

export function TimelineConnector({ isLast }: TimelineConnectorProps) {
    return (
        <>
            {!isLast && (
                <div className="absolute left-1.5 top-3 bottom-0 w-px bg-border/70" />
            )}
            
            <div className="flex w-full items-center">
                <div className="relative z-10 size-3 shrink-0 rounded-full bg-foreground ring-4 ring-background" />
                
                <div className="ml-4 h-px flex-1 bg-border/70 sm:ml-6" />
            </div>
        </>
    );
}