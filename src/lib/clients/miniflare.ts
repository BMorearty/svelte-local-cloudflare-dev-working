import { Miniflare, Log, LogLevel } from 'miniflare';
import { dev } from '$app/environment';

export const fallBackPlatformToMiniFlareInDev = async (_platform: App.Platform | undefined) => {
  if (!dev) return _platform;

  if (_platform) return _platform;
  const mf = new Miniflare({
    log: new Log(LogLevel.INFO),
    kvPersist: './kv-data', // Use filebase or in memory store
    kvNamespaces: ['GIFTS'], //Declare array with NameSpaces
    globalAsyncIO: true,
    globalTimers: true,
    globalRandom: true,

    script: `
		addEventListener("fetch", (event) => {
			event.waitUntil(Promise.resolve(event.request.url));
			event.respondWith(new Response(event.request.headers.get("X-Message")));
		});
		addEventListener("scheduled", (event) => {
			event.waitUntil(Promise.resolve(event.scheduledTime));
		});
		`,
  });

  const env = await mf.getBindings();
  const platform = { env } as App.Platform;
  return platform;
};
