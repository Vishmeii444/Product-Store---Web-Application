import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack gap={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          background={"linear-gradient(to right, #336a29, #eaff9d)"}
          backgroundClip={"text"}
          color="transparent"
        >
          Current Books 📖
        </Text>

        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          No products found ˙◠˙{" "}
          <Link to={"/create"}>
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
