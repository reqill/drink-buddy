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
export const GeneticCreateQuery = (
  queryName: string,
  nexusType: string,
  mutationArgs: any,
  dbType: string
) => {
  return extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field(queryName, {
        type: nexusType,
        args: mutationArgs,
        async resolve(_parent, args, context) {
          return context.prisma[dbType].create({
            data: {
              ...args,
            },
          });
        },
      });
    },
  });
};
export const GeneticCreateQueryWithRelations = (
  queryName: string,
  nexusType: string,
  mutationArgs: any,
  dbType: string,
  linkField: string,
  linkBy: string,
  linkingField: string
) => {
  return extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field(queryName, {
        type: nexusType,
        args: mutationArgs,
        async resolve(_parent, args, context) {
          if (args[linkingField]) {
            args[linkField] = {
              connect: args[linkingField].map((linkingWord: any) => {
                const temp: any = {};
                temp[linkBy] = linkingWord;
                return { ...temp };
              }),
            };
          }

          delete args[linkingField];
          return context.prisma[dbType].create({
            data: {
              ...args,
            },
          });
        },
      });
    },
  });
};
export const GenericDeleteMutation = (queryName: string, nexusType: string, dbType: string) => {
  return extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field(queryName, {
        type: nexusType,
        args: { id: nonNull(stringArg()) },
        async resolve(_parent, args, context) {
          return context.prisma[dbType].delete({
            where: {
              ...args,
            },
          });
        },
      });
    },
  });
};
