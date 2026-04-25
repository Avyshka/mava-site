import fs from "node:fs";
import path from "node:path";

type GameEntry = {
    id: string
}

export function createViteInputs(rootDir: string): Record<string, string> {
    const gamesPath = path.join(rootDir, "src", "data", "games.json");
    const games = JSON.parse(fs.readFileSync(gamesPath, "utf-8")) as GameEntry[];

    const input: Record<string, string> = {
        main: path.resolve(rootDir, "index.html")
    }

    for (const game of games) {
        input[game.id] = path.resolve(
            rootDir,
            `projects/${game.id}/index.html`
        );

        input[`${game.id}-play`] = path.resolve(
            rootDir,
            `projects/${game.id}/play/index.html`
        );
    }

    return input;
}