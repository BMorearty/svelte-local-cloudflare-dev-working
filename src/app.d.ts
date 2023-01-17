// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  interface Platform {
    env?: {
      GIFTS: KVNamespace;
    };
    context: {
      // TODO: can we just do promise: any?
      // waitUntil(promise: Promise<any>): void;
      waitUntil(promise: any): void;
    };
    caches: CacheStorage & { default: Cache };
  }
}
