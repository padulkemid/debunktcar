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

export const getCarById = async (_: any, { id }: any) => {
  const getCar = await Cars.findOne({ _id: { $oid: id } });
  const { manufacturer, name, power } = getCar;
  const struct: Car = {
    id,
    manufacturer,
    name,
    power,
  };

  return struct;
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

export const updateCar = async (_: any, { input }: any) => {
  const { id, manufacturer, name, power } = input;
  const updateCar = await Cars.updateOne(
    { _id: { $oid: id } },
    {
      manufacturer,
      name,
      power,
    }
  );
  const getCarAfterUpdated = await getCarById(_, input);

  return getCarAfterUpdated;
};

export const deleteCar = async (_: any, { id }: any) => {
  const deletedCount = await Cars.deleteOne({ _id: { $oid: id } });
  const struct = {
    id,
    result: `Cars with id of -> ${id} is deleted.`,
  };

  return struct;
};
