import { Application } from 'https://deno.land/x/oak/mod.ts';
import { applyGraphQL } from 'https://deno.land/x/oak_graphql/mod.ts';
import { typeDefs, resolvers } from './utils/gqlCfg.ts';

const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

const GraphQLService = await applyGraphQL({
  typeDefs,
  resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

const port = 4000;
console.log(`Server is on within http://localhost:${port}`);
await app.listen({ port });
