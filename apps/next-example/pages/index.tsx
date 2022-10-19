import { Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container as="main" maxW="container.lg">
      <Heading color="primary.200">This is a test app to showcase our component kit</Heading>
    </Container>
  );
};

export default Home;
