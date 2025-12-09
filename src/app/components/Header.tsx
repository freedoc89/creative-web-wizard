"use client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import FormDialog from "./FormDialog";

export default function Header() {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);
  const [open, setOpen] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window === undefined) return;

      const scrollY = window.scrollY;
      const maxScroll = 300;

      const clipPercent = Math.min((scrollY / maxScroll) * 10, 10);

      const paddingBottom = 2 + Math.min((scrollY / maxScroll) * 3, 3);
      const pageHeader = document.getElementById("page_header");
      if (pageHeader) {
        if (isMobile) {
          pageHeader.style.clipPath = `polygon(0 0, 100% 0%, 100% 98%, 0 100%)`;
          pageHeader.style.paddingBottom = "2rem";
        } else {
          pageHeader.style.clipPath = `polygon(0 0, 100% 0%, 100% ${
            100 - clipPercent
          }%, 0 100%)`;
          pageHeader.style.paddingBottom = `${paddingBottom}rem`;
        }
      }

      const rotatable = document.querySelector(
        ".rotatable-text"
      ) as HTMLElement;
      if (rotatable) {
        const maxRotation = -3.6;
        const rotation = Math.max(
          (scrollY / maxScroll) * maxRotation,
          maxRotation
        );
        rotatable.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <VStack
      id="page_header"
      w="100%"
      pb="2rem"
      alignItems="flex-start"
      overflow="hidden"
      color="var(--header-foreground)"
      style={{
        transition: "clip-path 0.1s ease-out, padding-bottom 0.1s ease-out"
      }}
    >
      <HStack
        w="90%"
        margin="0 auto"
        justifyContent={{ base: "center", md: "space-between" }}
        zIndex="1"
        color="var(--header-foreground)"
      >
        <Box marginTop="1.5rem">
          <Image
            height="auto"
            maxH={["65px", "75px"]}
            src="/Creative_Web_Wizard_logo.png"
            alt="Logo"
          />
        </Box>
        <Button
          display={{ base: "none", lg: "block" }}
          fontFamily="var(--secondary-font)"
          bg="var(--button-background)"
          p="8px 16px"
          borderRadius="8px"
          fontSize="1.1rem"
          _hover={{ bg: "var(--button-hover-background)" }}
          transition="background 0.2s ease-out"
          onClick={scrollToBottom}
        >
          Kapcsolat
        </Button>
      </HStack>

      <VStack
        w="90%"
        alignItems="flex-start"
        margin="0 auto"
        fontFamily="var(--secondary-font)"
        fontSize={["1rem", "1.6rem", "1.8rem"]}
        lineHeight="1.2"
      >
        <HStack alignItems="flex-start" position="relative" width="100%">
          <VStack alignItems="flex-start" color="var(--header-foreground)">
            <Text
              fontFamily="var(--main-font)"
              w="100%"
              as="h1"
              fontSize={["2.8rem", "3.6rem", "4.5rem"]}
              lineHeight="1.1"
              fontWeight="600"
              my="2rem"
            >
              Weboldal és <br />
              Webáruház <br />
              Készítés
            </Text>
            <Text
              fontSize={["1.1rem", "1.5rem"]}
              maxW={["90%", "70%"]}
              fontWeight="400"
            >
              Professzionális, egyedi weboldalak és webáruházak készítése.
            </Text>
            <Image
              position={["initial", "absolute"]}
              right={["0", "-70px"]}
              top={{ base: "0", md: "-10%", xl: "-16%" }}
              src="/multiplatform.png"
              alt="multi platform image"
              width={{ base: "450px", md: "450px", lg: "450px", xl: "800px" }}
            />

            <VStack
              alignItems="flex-start"
              py={["1rem", "3rem"]}
              width={["100%", "60%"]}
              fontSize={["1.1rem", "1.5rem"]}
              gap="1rem"
            >
              <Flex gap="1rem" alignItems="center">
                <Box height="3rem" width="3rem">
                  <FaHandPointRight size="100%" />
                </Box>
                <Text>
                  Egy jól megtervezett weboldal segít a márka építésben, és
                  növeli a vállalkozásod hitelességét.
                </Text>
              </Flex>
              <Flex gap="1rem" alignItems="center">
                <Box height="3rem" width="2.8rem">
                  <FaHandPointRight size="100%" />
                </Box>
                <Text>
                  Lehetővé teszi, hogy bemutasd a vállalkozásod értékeit,
                  küldetését és történetét.
                </Text>
              </Flex>
              <Flex gap="1rem" alignItems="center">
                <Box height="3rem" width="3.5rem">
                  <FaHandPointRight size="100%" />
                </Box>
                <Text>
                  Egy weboldal sokoldalú eszköz, amely segíthet elérni a
                  céljaidat, legyen az akár üzleti, akár személyes.
                </Text>
              </Flex>
            </VStack>
            <Button
              _hover={{ bg: "var(--button-hover-background)" }}
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
              <HStack w="100%">
                <FaHandPointRight />
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
          </VStack>
        </HStack>
      </VStack>
      <HStack
        className="rotatable-text"
        w={["100%", "60%"]}
        marginTop={["2rem", "4rem"]}
        marginBottom="0"
        marginLeft="auto"
        marginRight="auto"
        padding={["0 1rem", "0"]}
        zIndex="1"
        justifyContent="space-between"
      >
        <Text
          fontSize={["1rem", "2rem"]}
          fontWeight="600"
          textTransform="uppercase"
        >
          Egyedi design
        </Text>
        <Text display={["inline-block", "none"]}>|</Text>
        <Text
          fontSize={["1rem", "2rem"]}
          fontWeight="600"
          textTransform="uppercase"
        >
          Mobilbarát
        </Text>
        <Text display={["inline-block", "none"]}>|</Text>
        <Text
          fontSize={["1rem", "2rem"]}
          fontWeight="600"
          textTransform="uppercase"
        >
          SEO optimalizált
        </Text>
      </HStack>
    </VStack>
  );
}
