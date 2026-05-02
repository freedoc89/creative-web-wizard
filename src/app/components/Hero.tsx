import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  Icon,
  Stack,
  chakra
} from "@chakra-ui/react";
import heroContent from "@/data/heroContent";
import { FaHandPointRight } from "react-icons/fa";
import FormDialog from "./FormDialog";
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import packages from "@/data/packages";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();

  return (
    <Flex boxShadow="0px 2px 8px 0px rgba(24, 74, 231, 0.2)" paddingTop={5}>
      <VStack>
        <HStack justifyContent="space-between" margin="0 auto" maxW="90%">
          <VStack
            alignItems="flex-start"
            color="var(--header-foreground)"
            flex={1}
          >
            <Text
              fontFamily="var(--main-font)"
              w="100%"
              textAlign={["center", "initial"]}
              as="h1"
              fontSize={["2.8rem", "3.6rem", "5rem"]}
              lineHeight="1.1"
              fontWeight="700"
              my="2rem"
              color="var(--foreground)"
            >
              {heroContent.title[locale]}
            </Text>
            <Text
              fontSize={["1.1rem", "1.5rem"]}
              fontWeight="400"
              color="var(--foreground)"
            >
              {heroContent.subtitle[locale]}
            </Text>

            <VStack
              alignItems="flex-start"
              py={["1rem", "3rem"]}
              fontSize={["1.1rem", "1.5rem"]}
              gap="1rem"
              color="var(--foreground)"
            >
              {heroContent.bullets[locale].map((bullet, index) => (
                <Flex
                  gap="1rem"
                  alignItems="center"
                  key={index}
                  maxW={{ base: "100%", xl: "80%" }}
                >
                  <Box
                    height={{ base: "2rem", md: "3rem" }}
                    width={{ base: "2rem", md: "3rem" }}
                  >
                    <chakra.svg
                      as={FaHandPointRight}
                      boxSize={{ base: "1.5rem", md: "2.5rem" }}
                    />
                  </Box>
                  <Text>{bullet}</Text>
                </Flex>
              ))}
            </VStack>
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
                name:
                  packages.groups[0].plans?.[0].name[locale] || "Egyedi csomag",
                label: packages.groups[0].label[locale],
                description: packages.groups[0].description?.[locale] || null,
                price: packages.groups[0].plans?.[0].price.toString() || "0",
                features: packages.groups[0].plans?.[0].features[locale] || []
              }}
            />
          </VStack>
          <Box flex="1" display={["none", "block"]}>
            <Image height="auto" src="/hero_image.png" alt="hero image" />
          </Box>
        </HStack>
        <HStack
          bg="var(--foreground)"
          px={3}
          py={4}
          className="rotatable-text"
          marginTop={["2rem", "4rem"]}
          width="100%"
          marginBottom="0"
          gap="2rem"
          zIndex="1"
          justifyContent="space-evenly"
          color="#fff"
          maxW="100vw"
          overflow="hidden"
        >
          {heroContent.bottomBar.map((item, index) => (
            <Stack key={index}>
              <HStack align="center">
                <Box display="flex" alignItems="center">
                  <Icon
                    id="blub_icon"
                    as={item.icon}
                    boxSize={{ base: "1.6rem", md: "2em" }}
                  />
                </Box>
                <Text
                  color="#fff"
                  fontSize={
                    locale === "de"
                      ? ["0.7rem", "1.3rem"]
                      : ["0.8rem", "1.5rem"]
                  }
                  wordBreak="break-word"
                  overflowWrap="anywhere"
                  fontWeight="600"
                  textTransform="uppercase"
                  lineHeight="1.1"
                >
                  {item.text[locale]}
                </Text>
              </HStack>
            </Stack>
          ))}
        </HStack>
      </VStack>
    </Flex>
  );
}
