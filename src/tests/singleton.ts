import type { PrismaClient } from '@prisma/client';
import type { DeepMockProxy } from 'jest-mock-extended';
import { mockDeep, mockReset } from 'jest-mock-extended';
import { prisma } from '@/config/db.config';

jest.mock('@/config/db.config', () => ({
  __esModule: true,
  prisma: mockDeep<PrismaClient>()
}));

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;

beforeEach(() => {
  mockReset(prismaMock);
});
