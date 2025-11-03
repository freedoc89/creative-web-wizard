import services from "@/data/services";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { FiMonitor } from "react-icons/fi";

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
        width={["90%", "80%"]}
        gap={6}
        justifyItems={["center", "initial"]}
        justifyContent="center"
      >
        {services.map((item, index) => {
          const Icon = item.icon;
          const maxWValue =
            item.type === "desktop" ? ["100%", "90%"] : ["100%", "75%"];
          return (
            <GridItem key={index}>
              <Box
                boxShadow="0px 0px 1px 2px rgba(24, 74, 231, 0.6)"
                height="100%"
                position="relative"
                borderRadius="5px"
                padding={["20px", "30px"]}
                backgroundColor="#000f2e"
              >
                <HStack alignItems="flex-start" maxW={maxWValue} gap={4}>
                  {item.icon === FiMonitor ? (
                    <Box height={["5rem", "4.5rem"]} width={["6rem", "6rem"]}>
                      <Icon size="100%" stroke="var(--icons-color)" />
                    </Box>
                  ) : (
                    <Box height={["4rem", "5rem"]} width={["3rem", "4rem"]}>
                      <Icon size="100%" fill="var(--icons-color)" />
                    </Box>
                  )}
                  <Heading
                    as="h2"
                    fontFamily="var(--main-font)"
                    fontSize={["2rem", "2.8rem"]}
                    lineHeight="1.1"
                    fontWeight="700"
                  >
                    {item.label}
                  </Heading>
                </HStack>
                <Text
                  fontFamily="var(--main-font)"
                  fontWeight="400"
                  mt="2rem"
                  fontSize={["1.4rem, 2rem"]}
                >
                  {item.description}
                  {item.type === "shopify" ? (
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
                  ) : (
                    <></>
                  )}
                </Text>
              </Box>
            </GridItem>
          );
        })}
        {/* <GridItem>
          <Box
            boxShadow="0px 0px 1px 2px rgba(24, 74, 231, 0.6)"
            height="100%"
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
            boxShadow="0px 0px 1px 2px rgba(24, 74, 231, 0.6)"
            height="100%"
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
            boxShadow="0px 0px 1px 2px rgba(24, 74, 231, 0.6)"
            height="100%"
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
                <FaHtml5 size="100%" fill="var(--icons-color)" />
              </Box>
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
            boxShadow="0px 0px 1px 2px rgba(24, 74, 231, 0.6)"
            height="100%"
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
        </GridItem> */}
      </Grid>
    </VStack>
  );
}
