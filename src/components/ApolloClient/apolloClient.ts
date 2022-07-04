import awsconfig from "../../aws-exports";
import { ListZellerCustomers } from "../../graphql/queries";

export const fetchZellerCustomers = async () => {
  const response = await fetch(awsconfig.aws_appsync_graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `${awsconfig.aws_appsync_apiKey}`
    },
    body: JSON.stringify({ query: ListZellerCustomers }),
  });
  const json = await response.json();
  const { data } = json;
  return data;
};

export type ZellerCustomer = {
    email: string;
    id: string;
    name: string;
    role: string;
}
