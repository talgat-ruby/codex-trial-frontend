import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Car {
    id: ID!
    make: String!
    model: String!
    year: String!
  }

  type Query {
    cars(limit: Int = 1, offset: Int = 0): [Car!]!
  }
  type Mutation {
    addCar(make: String!, model: String!, year: String!): Car!
  }
`;

export default typeDefs;
