import { getCars, createCar } from '../entities/carResolvers.ts';

const resolvers = {
  Query: {
    getCars,
  },
  Mutation: {
    createCar,
  },
};

export default resolvers;
