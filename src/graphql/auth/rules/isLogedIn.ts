import { rule } from 'graphql-shield';
export const isLogedIn = rule({ cache: 'contextual' })(async (_parent, _args, ctx) => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      username: ctx.user.username,
    },
  });
  return Boolean(user);
});
