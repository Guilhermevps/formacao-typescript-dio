import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";

const Home = () => {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
};

export default Home;
