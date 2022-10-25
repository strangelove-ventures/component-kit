import { Box, Container, Grid, Heading, Text, useTheme, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import uuid from "react-uuid";

type ChakraColors = Record<string, Record<string | number, string | { key: string }>>;

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Container as="main" maxW="container.md" py={10}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl">
          This is a test app to showcase our component kit
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloribus ea error perferendis, quas
          voluptate eveniet quibusdam vitae quae, aperiam excepturi debitis possimus impedit mollitia. Tempore sit cum
          modi ratione dicta exercitationem cupiditate? Incidunt accusamus dicta explicabo quaerat distinctio ducimus
          possimus, assumenda earum eveniet eum aliquid eos. Quod rem dolorem minus tempora facere, unde deleniti, porro
          possimus corrupti amet exercitationem.
        </Text>
        <VStack align="stretch">
          <Heading>Colors</Heading>
          <VStack align="inherit" spacing={10}>
            {Object.entries(theme.colors as ChakraColors).map(([color, values]) => {
              const isSingleColor: boolean = typeof values !== "object";
              return isSingleColor ? (
                <VStack key={uuid()} align="inherit" spacing={4}>
                  <Heading as="h3" size="md">
                    {color}
                  </Heading>
                  <Box boxSize={20} borderRadius={8} bgColor={color} />
                </VStack>
              ) : (
                <VStack key={uuid()} align="inherit" spacing={4}>
                  <Heading as="h3" size="md">
                    {color}
                  </Heading>
                  <Grid gap={2} templateColumns="repeat(auto-fill, 5rem)">
                    {Object.keys(values).map((value) => (
                      <Box key={value} w="5rem" h="5rem" borderRadius={8} bgColor={`${color}.${value}`} />
                    ))}
                  </Grid>
                </VStack>
              );
            })}
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Home;
