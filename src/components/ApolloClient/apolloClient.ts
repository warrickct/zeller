import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
// import { RestLink } from "apollo-link-rest";
import awsconfig from "../../aws-exports";

const httpLink = new HttpLink({
//   uri: "https://48p1r2roz4.sse.codesandbox.io",
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
  credentials: awsconfig.aws_appsync_apiKey,
});