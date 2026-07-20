import { Briefcase, MapPin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profile } from "@/data/profile";

function getInitials(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

export function ProfileCard() {
    return (
        <div className="relative px-4 sm:px-6 md:px-8">
            <div className="flex items-start justify-between">
                <Avatar
                    className="-mt-16 size-24 rounded-sm border-4 border-background bg-card sm:-mt-20 sm:size-32"
                >
                    <AvatarImage src={profile.avatar} alt={profile.name} className="rounded-sm object-cover" />
                    <AvatarFallback className="rounded-sm bg-muted text-2xl font-semibold text-foreground">
                        {getInitials(profile.name)}
                    </AvatarFallback>
                </Avatar>
            </div>

            <div className="mt-3 space-y-3 pb-6 sm:mt-4">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold leading-none tracking-tight text-foreground sm:text-2xl">
                        {profile.name}
                    </h1>
                </div>

                <p className="text-sm leading-relaxed text-foreground sm:text-base">
                    {profile.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1.5">
                        <Briefcase className="size-4" />
                        <span>{profile.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="size-4" />
                        <span>{profile.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}