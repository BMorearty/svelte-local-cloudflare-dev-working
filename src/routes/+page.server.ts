import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
  return {
    hello: platform?.env?.GIFTS.get('hello'),
  };
};

export const actions: Actions = {
  default: async ({ platform, request }) => {
    const data = await request.formData();
    const hello = data.get('hello') as string;
    if (hello) {
      await platform?.env?.GIFTS.put('hello', hello);
    }
  },
};
