export const resolvers = {
  Query: {
    drinks: ({ _parent, _args, ctx }: { _parent: any; _args: any; ctx: any }) => {
      //don't know the types yet
      return ctx.prisma.link.findMany();
    },
  },
};
