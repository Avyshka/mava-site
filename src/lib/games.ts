import gameData from "../data/games.json";

export type Game = {
    id: string;
    title: string;
    subtitle: string;
    descriptionShort: string;
    description: string;
    cover: string;
    tags: string[];
    heroImage: string;
    controls: string[];
    features: string[];
    accentColor: string;
    buildPath: string;
}

export const games: Game[] = gameData as Game[];

export function getGameById(id: string): Game | undefined {
    return games.find((game: Game) => game.id === id);
}