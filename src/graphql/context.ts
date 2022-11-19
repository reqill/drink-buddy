import { PrismaClient } from '@prisma/client';
import prisma from '@database/prisma';
import { authenticate } from './auth/authenticate';

export type Context = {
  prisma: PrismaClient;
  user: { username: string };
};
export async function createContext({ req, res }: { req: any; res: any }): Promise<Context> {
  return {
    prisma: prisma,
    user: authenticate(req.headers.authorization),
  };
}
