import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/book.js";
import { toaster } from "@/components/ui/toaster";

const CreatePage = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createBook } = useProductStore();

  const handleAddBook = async () => {
    const { success, message } = await createBook(newBook);
    
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
    });

    if (success) {
      setNewBook({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxW={"400px"}>
      <VStack gap={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Book
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack gap={4}>
            <Input
              placeholder="Book Name"
              name="name"
              value={newBook.name}
              onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newBook.price}
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newBook.image}
              onChange={(e) =>
                setNewBook({ ...newBook, image: e.target.value })
              }
            />
            <Button colorPalette="blue" onClick={handleAddBook} w="full">
              Add Book
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
