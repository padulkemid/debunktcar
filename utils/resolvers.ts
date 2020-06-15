import {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from '../entities/carResolvers.ts';

const resolvers = {
  Query: {
    getCars,
    getCarById,
  },
  Mutation: {
    createCar,
    updateCar,
    deleteCar,
  },
};

export default resolvers;
