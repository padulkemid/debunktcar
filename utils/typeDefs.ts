import { gql } from 'https://deno.land/x/oak_graphql/mod.ts';

const typeDefs = (gql as any)`
  type Car {
    manufacturer: String!
    name: String!
    power: Int!
  }

  type Query {
    getCars: [Car!]!
  }
`;

export default typeDefs;
