import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_PORT != "" ? `:${import.meta.env.VITE_BACKEND_PORT}` : "" }`,
  cache: new InMemoryCache(),
});

export default client;
