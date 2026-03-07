import React, { useEffect } from "react";
import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "@/store/book";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const { fetchBooks, books } = useProductStore();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  console.log("books", books);

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
          Current Books 🕮
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          gap={10}
          w={"full"}
        >
          {books.map((book) => (
            <ProductCard key={book._id} book={book} />
          ))}
        </SimpleGrid>

        {/*If there are no books, then the create products will pop up*/}
        {books.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No books found ˙◠˙{" "}
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
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
