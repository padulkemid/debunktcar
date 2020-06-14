import { getCars } from '../entities/carResolvers.ts';

const resolvers = {
  Query: {
    getCars,
  },
};

export default resolvers;
