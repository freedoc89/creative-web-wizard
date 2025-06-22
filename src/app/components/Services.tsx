import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { FaShopify, FaWordpress } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { HiMiniCog6Tooth } from "react-icons/hi2";

export default function Services() {
  return (
    <VStack id="services">
      <Heading
        mt={["5rem", "7rem"]}
        color="#184ae7"
        fontSize={["2rem", "3rem"]}
        mb={["2rem", "4rem"]}
        textTransform="uppercase"
        fontFamily="var(--main-font)"
        textDecoration="underline"
      >
        Szolgáltatások
      </Heading>
      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)"]}
        maxW={["90%", "80%"]}
        gap={8}
        justifyItems={["center", "initial"]}
        justifyContent="center"
      >
        <GridItem>
          <Box
            position="relative"
            borderRadius="5px"
            padding={["20px", "30px"]}
            backgroundColor="#000f2e"
          >
            <HStack alignItems="flex-start" maxW={["100%", "70%"]}>
              <Box height={["4rem", "6rem"]} width={["5rem", "6rem"]}>
                <FaShopify size="100%" fill="var(--icons-color)" />
              </Box>
              <Heading
                as="h2"
                fontFamily="var(--main-font)"
                fontSize={["2.3rem", "2.8rem"]}
                lineHeight="1.1"
                fontWeight="700"
              >
                Shopify fejlesztés
              </Heading>
            </HStack>
            <Text
              fontFamily="var(--main-font)"
              fontWeight="400"
              mt="2rem"
              fontSize={["1.4rem, 2rem"]}
            >
              Shopify webáruházak készítése, testreszabása, *alkalmazások
              kiváltása.{" "}
              <span
                style={{
                  color: "red",
                  opacity: ".7",
                  fontSize: "0.8rem !important"
                }}
              >
                <br />
                (* ha lehetséges!)
              </span>
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            position="relative"
            borderRadius="5px"
            padding={["20px", "30px"]}
            backgroundColor="#000f2e"
          >
            <HStack alignItems="flex-start" maxW={["100%", "70%"]}>
              <Box height={["4rem", "6rem"]} width={["5rem", "6rem"]}>
                <FaWordpress size="100%" fill="var(--icons-color)" />
              </Box>
              <Heading
                as="h2"
                fontFamily="var(--main-font)"
                fontSize={["2.3rem", "2.8rem"]}
                lineHeight="1.1"
                fontWeight="700"
              >
                WordPress fejlesztés
              </Heading>
            </HStack>
            <Text
              fontFamily="var(--main-font)"
              fontWeight="400"
              mt="2rem"
              fontSize={["1.4rem, 2rem"]}
            >
              Egyedi WordPress oldalak építése, testreszabása, egyedi bővítmény
              készítése.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            position="relative"
            borderRadius="5px"
            padding={["20px", "30px"]}
            backgroundColor="#000f2e"
            css={{
              "&:hover .gear-icon": {
                transform: "rotate(360deg)",
                transition: "transform 2.2s ease"
              }
            }}
          >
            <HStack alignItems="flex-start" maxW={["100%", "70%"]}>
              <Box height={["4rem", "6rem"]} width={["5rem", "6rem"]}>
                <HiMiniCog6Tooth size="100%" fill="var(--icons-color)" />
              </Box>
              {/* <Box
                className="gear-icon"
                as={HiMiniCog6Tooth}
                boxSize="6rem"
                fill="var(--icons-color)"
                transition="transform 2.2s ease"
                _groupHover={{
                  transform: "rotate(360deg)"
                }}
              /> */}
              <Heading
                as="h2"
                fontFamily="var(--main-font)"
                fontSize={["2.3rem", "2.8rem"]}
                lineHeight="1.1"
                fontWeight="700"
              >
                Weboldal fejlesztés
              </Heading>
            </HStack>
            <Text
              fontFamily="var(--main-font)"
              fontWeight="400"
              mt="2rem"
              fontSize={["1.4rem, 2rem"]}
            >
              Modern és reszponzív weboldalak fejlesztése. (HTML, CSS, JS)
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            position="relative"
            borderRadius="5px"
            padding={["20px", "30px"]}
            backgroundColor="#000f2e"
          >
            <HStack alignItems="flex-start">
              <Box height={["4rem", "6rem"]} width={["5rem", "6rem"]}>
                <FiMonitor size="100%" stroke="var(--icons-color)" />
              </Box>
              <Heading
                as="h2"
                fontFamily="var(--main-font)"
                fontSize={["2.3rem", "2.8rem"]}
                lineHeight="1.1"
                fontWeight="700"
              >
                Asztali alkalmazás fejlesztés
              </Heading>
            </HStack>
            <Text
              fontFamily="var(--main-font)"
              fontWeight="400"
              mt="2rem"
              fontSize={["1.4rem, 2rem"]}
            >
              Egyedi asztali alkalmazások fejlesztése. (Windows, Cross-Plat)
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
}
