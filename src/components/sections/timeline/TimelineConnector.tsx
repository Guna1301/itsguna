interface TimelineConnectorProps {
    isLast: boolean;
}

export function TimelineConnector({ isLast }: TimelineConnectorProps) {
    return (
        <>
            {/* Darker, thicker vertical line for better visibility */}
            {!isLast && (
                <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-border/80" />
            )}
            
            {/* Circle and Horizontal Connector */}
            <div className="flex w-full items-center">
                <div className="relative z-10 size-3 shrink-0 rounded-full bg-foreground ring-4 ring-background" />
                
                {/* Darker, thicker horizontal line */}
                <div className="ml-4 h-[2px] flex-1 bg-border/80 sm:ml-6" />
            </div>
        </>
    );
}