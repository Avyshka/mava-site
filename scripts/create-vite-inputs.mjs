import fs from "fs";
import path from "path";

export function createViteInputs(rootDir) {
    const gamesPath = path.join(rootDir, "src", "data", "games.json");
    const games = JSON.parse(fs.readFileSync(gamesPath, "utf-8"));

    const input = {
        main: path.resolve(rootDir, "index.html"),
    };

    for (const game of games) {
        input[`${game.id}`] = path.resolve(
            rootDir,
            `projects/${game.id}/index.html`,
        );

        input[`${game.id}-play`] = path.resolve(
            rootDir,
            `projects/${game.id}/play/index.html`,
        );
    }

    return input;
}