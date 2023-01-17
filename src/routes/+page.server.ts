import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ platform }) => {
  let hello = await platform?.env?.GIFTS.get('hello');
  if (!hello) {
    await platform?.env?.GIFTS.put('hello', 'world');
    hello = await platform?.env?.GIFTS.get('hello');
  }
  return {
    hello: hello ?? '',
    // platform,
  };
};

export const actions: Actions = {
  default: async ({ platform, request }) => {
    const promises = [];
    try {
      const data = await request.formData();
      const hello = data.get('hello') as string;
      console.log({ actions: 'yes', hello });
      if (hello) {
        promises.push(platform?.env?.GIFTS.put('hello', hello));
      }
    } finally {
      await Promise.all(promises);
    }
  },
};
