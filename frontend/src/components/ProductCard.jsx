import { Box, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = (book) => {
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
          ${ProductCard.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" />
          <IconButton icon={<DeleteIcon />} colorScheme="red" />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
