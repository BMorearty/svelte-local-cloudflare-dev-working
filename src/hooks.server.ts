import { dev } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (dev) {
    const { fallBackPlatformToMiniFlareInDev } = await import('$lib/clients/miniflare');
    // @ts-expect-error I don't know why
    event.platform = await fallBackPlatformToMiniFlareInDev(event.platform);
  }
  return resolve(event);
};
