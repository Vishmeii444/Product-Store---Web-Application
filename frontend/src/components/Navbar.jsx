import React from "react";
import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }} //for smaller screens,22 and for larger,28
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          background="linear-gradient(to right, #336a29, #eaff9d)"
          backgroundClip="text"
          color="transparent"
        >
          <Link to={"/"}>BookFour 🛒</Link>
        </Text>

        <HStack gap={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FiPlusCircle fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}> {/*hook from chakra ui*/}
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;