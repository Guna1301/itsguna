export async function fetchDevToArticles(username: string) {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`);
    if (!response.ok) {
        throw new Error("Failed to fetch articles from Dev.to");
    }
    return response.json();
}