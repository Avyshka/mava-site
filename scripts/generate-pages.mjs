import fs from "fs";
import path from "path";

const root = process.cwd();

const gamesPath = path.join(root, "src", "data", "games.json");
const projectsDir = path.join(root, "projects");

const games = JSON.parse(fs.readFileSync(gamesPath, "utf-8"));

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function createLandingHtml(game) {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${game.title} / Mava Studio</title>
    <meta name="description" content="${game.description}" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/pages/game/main.ts"></script>
  </body>
</html>
`
}

function createPlayHtml(game) {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Play ${game.title} / Mava Studio</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/pages/gameplay/main.ts"></script>
  </body>
</html>
`
}

for (const game of games) {
    const gameDir = path.join(projectsDir, game.id);
    const playDir = path.join(gameDir, "play");

    ensureDir(gameDir);
    ensureDir(playDir);

    fs.writeFileSync(path.join(gameDir, "index.html"), createLandingHtml(game));
    fs.writeFileSync(path.join(playDir, "index.html"), createPlayHtml(game));

    console.log(`✔ Generated pages for [ ${game.id} ]`);
}

console.log("✅ Pages generated");