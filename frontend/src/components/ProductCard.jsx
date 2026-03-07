import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useColorModeValue } from "./ui/color-mode";

const ProductCard = ({ book }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={book.image}
        alt={book.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {book.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${book.price}
        </Text>

        <HStack gap={2}>
          <IconButton
            aria-label="Edit book"
            colorPalette="blue"
            variant="ghost"
          >
            <FiEdit />
          </IconButton>

          <IconButton
            aria-label="Delete book"
            colorPalette="red"
            variant="ghost"
          >
            <FiTrash2 />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
