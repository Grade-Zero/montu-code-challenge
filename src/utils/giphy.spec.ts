import { describe, expect, it, beforeAll, afterEach, afterAll } from 'vitest';
import { ResultModel, giphyFetchTrending } from ".";

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const data: ResultModel = {
  data: [{
    type: 'gif',
    id: '1',
    url: 'https://media2.giphy',
    title: 'title',
    import_datetime: '',
    trending_datetime: '',
    images: {
      fixed_width: {
        url: 'https://media2.giphy.com/media/OLX2scj6MSrOUxTgoL/giphy.gif?cid=0a2c84edam4awkg6vvpbtze009wxcpg0tdnhpklt2d2743g8&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
        height: '345',
        width: '678',
      }
    }
  }],
  pagination: {
    total_count: 1,
    count: 1,
    offset: 0,
  },
  meta: {
    status: 200,
    msg: 'OK',
    response_id: '-',
  }
};

const server = setupServer(
  rest.get("https://api.giphy.com/v1/gifs/trending", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  })
);

describe('fetch trending', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('fetch successfully', async () => {
    const trending = await giphyFetchTrending();

    expect(trending.data).toMatchObject(data.data);
    expect(trending.data).toHaveLength(1)
  });
});