interface Car {
  manufacturer: string;
  name: string;
  power: number;
}

export const getCars = () => {
  const cars: Car[] = [
    {
      manufacturer: 'Honda',
      name: 'Jazz RS',
      power: 1500,
    },
    {
      manufacturer: 'Toyota',
      name: 'Avanza Veloz',
      power: 1200,
    },
  ];

  return cars;
};
