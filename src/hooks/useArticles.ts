import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/services/articles";

export function useArticles() {
    return useQuery({
        queryKey: ["articles"],
        queryFn: getArticles,
        staleTime: 1000 * 60 * 10, 
        retry: 2,
    });
}