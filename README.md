# Nova Proxy

Nova is a local browser-style web proxy with a black starfield start page, neon blue controls, app shortcuts, and tabs. It uses Scramjet in the browser and Libcurl over a local Wisp transport server. Brand marks are rendered from Simple Icons.

## Project folders

- `index.html` is the Nova start page.
- `src/` contains the browser UI script and styles.
- `public/controller-sw.js` is the service worker wrapper.
- `public/games/` contains the Games page, generated game logos, and catalog.
- `public/games/offline/` contains the local game files.
- `server.mjs` and `vite.config.js` run the app and proxy transport.

## Start it

Install Node.js 20 or newer and pnpm, then run:

```powershell
pnpm install
pnpm dev
```

Open the local URL printed by the server (normally `http://127.0.0.1:4173`). The proxy service worker needs localhost or HTTPS; opening `index.html` directly from disk will not work.

Nova Games runs on the next local port (normally `http://127.0.0.1:4174`) and opens from the Games button in Nova. Its game library is served from `public/games/`.

Searches use DuckDuckGo. Search results, shortcut clicks, YouTube, TikTok, and other destinations load inside the selected Nova browser tab. In-page navigation updates the address bar and stays in the proxied tab. The address bar also accepts full website addresses. Some sites may still block proxied playback, sign-in, or other interactive features.

The server binds to `127.0.0.1` by default and blocks private and loopback destinations. Keep it local while developing. Before exposing it on a public network, add authentication, rate limits, and deployment-specific network restrictions.
