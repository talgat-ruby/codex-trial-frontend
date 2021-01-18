import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    cars(limit: Int = 1, offset: Int = 0): [Car!]!
  }
  type Car {
    id: ID!
    make: String!
    model: String!
    year: String!
  }
`;

export default typeDefs;