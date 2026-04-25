export function getGameIdFromPath(): string | null {
    const path: string = window.location.pathname;
    const match: RegExpMatchArray | null = path.match(/\/projects\/([^/]+)\/?/);
    if (!match) {
        return null;
    }
    return match[1];
}