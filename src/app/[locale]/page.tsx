"use client";
import {
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text
} from "@chakra-ui/react";
import { IoChevronUp } from "react-icons/io5";
import Footer from "../components/Footer";
import Packages from "../components/Packages";
import Services from "../components/Services";
import { FaHandPointRight } from "react-icons/fa";
import FormDialog from "../components/FormDialog";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import packages from "@/data/packages";
import { useLanguage } from "../hooks/useLanguage";
import heroContent from "@/data/heroContent";
import { WorkProcess } from "../components/WorkProcess";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const headingTranslations = {
    hu: (
      <>
        Ötleted van? <br /> Vágjunk bele a közös munkába!
      </>
    ),
    en: (
      <>
        Have an idea? <br /> Let&apos;s start working together!
      </>
    ),
    de: (
      <>
        Hast du eine Idee? <br /> Packen wir es gemeinsam an!
      </>
    )
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <WorkProcess />

      <Technologies />
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
          {headingTranslations[locale]}
        </Heading>

        <Button
          _hover={{ bg: "var(--button-hover-background)" }}
          boxShadow="0px 2px 1px 1px rgba(24, 74, 231, 0.6)"
          _active={{
            boxShadow: " 0px 1px 1px 1px rgba(24, 74, 231, 0.5)",
            transform: "translateY(1px)"
          }}
          mt="1rem"
          height="fit"
          p="14px 24px"
          borderRadius="12px"
          bg="var(--button-background)"
          textTransform="uppercase"
          fontSize={["1.2rem", "1.5rem"]}
          transition="background 0.2s ease-out"
          marginLeft={["auto", "initial"]}
          marginRight={["auto", "initial"]}
          onClick={() => setOpen(true)}
        >
          <HStack w="100%" gap="0.5rem" alignItems="center">
            <chakra.svg
              as={FaHandPointRight}
              boxSize={{ base: "1.4rem", md: "1.5rem" }}
            />
            <Text>{heroContent.cta[locale]}</Text>
          </HStack>
        </Button>
        <FormDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          type="quote_request"
          selectedPackage={{
            name: packages.groups[0].plans?.[0].name[locale] || "Egyedi csomag",
            label: packages.groups[0].label[locale],
            description: packages.groups[0].description?.[locale] || null,
            price: packages.groups[0].plans?.[0].price.toString() || "0",
            features: packages.groups[0].plans?.[0].features[locale] || []
          }}
        />
      </Flex>

      <Footer />

      <IconButton
        aria-label=""
        top="90%"
        right="30px"
        position="fixed"
        bg="var(--button-background)"
        color="whiteAlpha.700"
        rounded="md"
        _hover={{ bg: "var(--button-hover-background)" }}
        onClick={scrollToTop}
      >
        <IoChevronUp />
      </IconButton>
    </>
  );
}
