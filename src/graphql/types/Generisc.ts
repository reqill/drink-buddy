import { extendType, nonNull, stringArg } from 'nexus';

export const GenericRelationResolve = (nexusType: any, dbType: string, fieldName: string) => {
  return {
    type: nexusType,
    async resolve(_parent: any, _args: any, ctx: any) {
      return await ctx.prisma[dbType]
        .findUnique({
          where: { id: _parent.id },
        })
        [fieldName]();
    },
  };
};
export const GenericListQuery = (queryName: string, nexusTypeName: string, dbType: string) => {
  return extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field(queryName, {
        type: nexusTypeName,
        resolve(_parent, _args, ctx) {
          return ctx.prisma[dbType].findMany();
        },
      });
    },
  });
};
export const GenericSingleQuery = (queryName: string, nexusType: string, dbType: string) => {
  return extendType({
    type: 'Query',
    definition(t) {
      t.nullable.field(queryName, {
        args: {
          id: nonNull(stringArg()),
        },
        type: nexusType,
        resolve(_parent, args, ctx) {
          return ctx.prisma[dbType].findUnique({
            where: {
              id: args.id,
            },
          });
        },
      });
    },
  });
};
