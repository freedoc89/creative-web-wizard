"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text
} from "@chakra-ui/react";
import { IoChevronUp } from "react-icons/io5";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Packages from "./components/Packages";
import Services from "./components/Services";
import { FaHandPointRight } from "react-icons/fa";
import FormDialog from "./components/FormDialog";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <Header />
      <Services />
      <Packages />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        mt={["5rem", "7rem"]}
      >
        <Heading
          color="#184ae7"
          fontSize={["1.8rem", "3.5rem"]}
          mb={["2rem", "4rem"]}
          textTransform="uppercase"
          fontFamily="var(--main-font)"
          textDecoration="underline"
          fontWeight="700"
          lineHeight="1.5"
          textAlign="center"
          textUnderlineOffset={["6px", "8px"]}
        >
          Ötleted van? <br /> Vágjunk bele a közös munkába!
        </Heading>
        <Button
          _hover={{ bg: "var(--button-hover-background)" }}
          _active={{
            boxShadow: " 0px 1px 1px 1px rgba(24, 74, 231, 0.5)",
            transform: "translateY(1px)"
          }}
          color="var(--foreground)"
          borderRadius="12px"
          bg="var(--button-background)"
          textTransform="uppercase"
          fontSize={["1.1rem", "1.8rem"]}
          transition="background 0.2s ease-out"
          marginLeft={["auto", "initial"]}
          marginRight={["auto", "initial"]}
          height="fit"
          padding={["0.5rem 1rem", "1rem 2rem"]}
          boxShadow="0px 2px 1px 1px rgba(24, 74, 231, 0.6)"
          display="block"
          onClick={() => setOpen(true)}
        >
          <HStack w="100%">
            <Box scale={["1.0", "1.3"]}>
              <FaHandPointRight />
            </Box>
            <Text>Árajánlat kérése</Text>
          </HStack>
        </Button>
        <FormDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          type="ajanlat"
          selectedPackage={{
            name: "Pro csomag",
            label: "WordPress",
            description: null,
            price: 220000,
            features: ["Reszponzív dizájn", "Egyedi fejlesztés"]
          }}
        />
      </Flex>
      <Footer />

      <IconButton
        aria-label=""
        top="90%"
        right="30px"
        position="fixed"
        bg="#184ae7!important"
        color="whiteAlpha.700"
        rounded="md"
        _hover={{ color: "whiteAlpha.900" }}
        onClick={scrollToTop}
      >
        <IoChevronUp />
      </IconButton>
    </>
  );
}
