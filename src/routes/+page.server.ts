import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
  console.log({ platform });
  let hello = await platform?.env?.GIFTS.get('hello');
  if (!hello) {
    await platform?.env?.GIFTS.put('hello', 'world');
    hello = await platform?.env?.GIFTS.get('hello');
  }
  return {
    hello: hello ?? '',
  };
};

export const actions: Actions = {
  default: async ({ platform, request }) => {
    const data = await request.formData();
    const hello = data.get('hello') as string;
    console.log({ actions: 'yes', hello });
    if (hello) {
      await platform?.env?.GIFTS.put('hello', hello);
    }
  },
};
