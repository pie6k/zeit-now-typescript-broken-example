import * as Koa from "koa";
import { Context } from "koa";

import { createApp } from "../common";
import { foo } from "~app/services/foo";

async function main(ctx: Context, next: Function) {
  const { host } = ctx.headers;

  ctx.status = 200;
  ctx.body = {
    description: `Hello! This server supports multiple routes. ${foo()}`,
    first: `https://${host}/first`,
    second: `https://${host}/second`
  }
}

export default createApp((app: Koa) => {
  app.use(main);
});
