import { gql } from 'https://deno.land/x/oak_graphql/mod.ts';

const typeDefs = (gql as any)`
  type Car {
    id: ID
    manufacturer: String
    name: String
    power: Int
  }

  type DeletedCar {
    id: ID!
    result: String!
  }

  input NewCar {
    manufacturer: String!
    name: String!
    power: Int!
  }

  input EditCar {
    id: ID!
    manufacturer: String!
    name: String!
    power: Int!
  }

  type Query {
    getCars: [Car!]!
    getCarById(id: ID!): Car!
  }

  type Mutation {
    createCar(input: NewCar!): Car!
    updateCar(input: EditCar!): Car!
    deleteCar(id: ID!): DeletedCar!
  }
`;

export default typeDefs;
