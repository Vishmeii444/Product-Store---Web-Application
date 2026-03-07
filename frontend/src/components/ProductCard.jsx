import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
  createIcon,
} from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Chakra v3 uses Dialog instead of Modal
import { toaster } from "@/components/ui/toaster"; // Chakra v3 uses toaster instead of useToast
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "../store/book";
import { useState } from "react";
import React from "react";

const EditIcon = createIcon({
  displayName: "EditIcon",
  viewBox: "0 0 24 24",
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
});

const DeleteIcon = createIcon({
  displayName: "DeleteIcon",
  viewBox: "0 0 24 24",
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
});

const ProductCard = ({ book }) => {
  const [updatedBook, setUpdatedBook] = useState(book);
  const [open, setOpen] = useState(false); // v3 uses standard state for dialogs

  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteBook, updateBook } = useProductStore();

  const handleDeleteBook = async (bid) => {
    const { success, message } = await deleteBook(bid);
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
    });
  };

  const handleUpdateBook = async (bid, updatedBook) => {
    const { success, message } = await updateBook(bid, updatedBook);
    setOpen(false);
    toaster.create({
      title: success ? "Success" : "Error",
      description: success ? "Book updated successfully" : message,
      type: success ? "success" : "error",
    });
  };

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
          <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogTrigger asChild>
              <IconButton colorPalette="blue" variant="ghost">
                <EditIcon />
              </IconButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Book</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <VStack gap={4}>
                  <Input
                    placeholder="Book Name"
                    value={updatedBook.name}
                    onChange={(e) =>
                      setUpdatedBook({ ...updatedBook, name: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Price"
                    type="number"
                    value={updatedBook.price}
                    onChange={(e) =>
                      setUpdatedBook({ ...updatedBook, price: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Image URL"
                    value={updatedBook.image}
                    onChange={(e) =>
                      setUpdatedBook({ ...updatedBook, image: e.target.value })
                    }
                  />
                </VStack>
              </DialogBody>
              <DialogFooter>
                <Button
                  colorPalette="blue"
                  onClick={() => handleUpdateBook(book._id, updatedBook)}
                >
                  Update
                </Button>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>

          <IconButton
            colorPalette="red"
            variant="ghost"
            onClick={() => handleDeleteBook(book._id)}
          >
            <DeleteIcon />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
