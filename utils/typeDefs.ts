import { gql } from 'https://deno.land/x/oak_graphql/mod.ts';

const typeDefs = (gql as any)`
  type Car {
    id: ID!
    manufacturer: String!
    name: String!
    power: Int!
  }

  input NewCar {
    manufacturer: String!
    name: String!
    power: Int!
  }

  type Query {
    getCars: [Car!]!
  }

  type Mutation {
    createCar(input: NewCar!): Car!
  }
`;

export default typeDefs;
