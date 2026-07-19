import { profile } from "@/data/profile";

export function HeroBanner() {
    return (
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl">
            <img 
                src={profile.banner} 
                alt="Profile Banner" 
                className="h-full w-full object-cover"
            />
        </div>
    );
}