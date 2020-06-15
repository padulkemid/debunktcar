import { Cars } from '../utils/connection.ts';
import { Car } from '../utils/interfaces.ts';

// Queries
export const getCars = async () => {
  const allCars = await Cars.find();
  const allCarsIdMapped = allCars.map((el: any) => {
    const {
      _id: { $oid: realId },
    } = el;
    el.id = realId;
    return el;
  });

  return allCarsIdMapped;
};

// Mutation
export const createCar = async (_: any, { input }: any) => {
  const insertCar = await Cars.insertOne(input);
  const { manufacturer, name, power } = input;
  const { $oid: id } = insertCar;
  const struct: Car = {
    id,
    manufacturer,
    name,
    power,
  };

  return struct;
};
