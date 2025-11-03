import packages from "@/data/packages";
import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import PackageCard from "./PackageCard";

export default function Packages() {
  return (
    <VStack id="packages">
      <Heading
        mt={["5rem", "7rem"]}
        color="#184ae7"
        fontSize={["2rem", "3rem"]}
        mb={["2rem", "4rem"]}
        textTransform="uppercase"
        fontFamily="var(--main-font)"
        textDecoration="underline"
      >
        Csomag ajánlataink
      </Heading>
      <Grid
        templateColumns={["1fr", "repeat(3, 1fr)"]}
        maxW={["90%", "80%"]}
        gap={6}
        justifyItems={["center", "initial"]}
        justifyContent="center"
      >
        {packages.map((pack, index) => (
          <GridItem key={index}>
            <PackageCard
              title={pack.label}
              icon={pack.icon}
              selectedPackage={packages[index].packages.length > 1 ? "1" : "0"}
              packages={pack.packages}
              description={pack.description}
            />
          </GridItem>
        ))}
        {/* <GridItem>
          <Box
            position="relative"
            borderRadius="5px"
            padding={["20px", "30px"]}
            backgroundColor="#000f2e"
          >
            <HStack alignItems="flex-start">
              <Box height={["4rem", "6rem"]} width={["5rem", "6rem"]}>
                <FaShopify size="100%" fill="var(--icons-color)" />
              </Box>
              <Heading
                as="h2"
                fontFamily="var(--main-font)"
                fontSize={["2.2rem", "2.8rem"]}
                lineHeight="1.1"
                fontWeight="700"
              >
                Shopify Webshop Csomagok
              </Heading>
            </HStack>
            <RadioGroup.Root defaultValue="2" mt="2.5rem" mb="1rem">
              <Flex
                gap="6"
                flexDirection={["column", "row", "row"]}
                wrap={["wrap", "nowrap"]}
              >
                {items.map((item) => (
                  <RadioGroup.Item
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    key={item.value}
                    value={item.value}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: "#031640",
                      color: "#fff",
                      border: "2px solid transparent",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      fontFamily: "var(--main-font)",
                      transition: "all 0.25s ease"
                    }}
                    _checked={{
                      background: "#184ae7 !important",
                      borderColor: "#184ae7",
                      color: "#fff"
                    }}
                    _hover={{
                      borderColor: "#184ae7"
                    }}
                  >
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </Flex>
            </RadioGroup.Root>

            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Mobilbarát sablon kiválasztása
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Alap színek, logó beállítása
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Max. 5 termék feltöltése
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Fizetési módok bekötése
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Kapcsolat oldal és alap menük
              </List.Item>
            </List.Root>
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
                <FaWordpress size="100%" fill="var(--icons-color)" />
              </Box>
              <Heading
                as="h2"
                fontFamily="var(--main-font)"
                fontSize={["2.2rem", "2.8rem"]}
                lineHeight="1.1"
                fontWeight="700"
              >
                WordPress Csomagok
              </Heading>
            </HStack>
            <RadioGroup.Root defaultValue="2" mt="2.5rem" mb="1rem">
              <Flex
                gap="6"
                flexDirection={["column", "row", "row"]}
                wrap={["wrap", "nowrap"]}
              >
                {items.map((item) => (
                  <RadioGroup.Item
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    key={item.value}
                    value={item.value}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      background: "#031640",
                      color: "#fff",
                      border: "2px solid transparent",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                      fontFamily: "var(--main-font)",
                      transition: "all 0.25s ease"
                    }}
                    _checked={{
                      background: "#184ae7 !important",
                      borderColor: "#184ae7",
                      color: "#fff"
                    }}
                    _hover={{
                      borderColor: "#184ae7"
                    }}
                  >
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </Flex>
            </RadioGroup.Root>

            <List.Root gap="2" variant="plain" align="center">
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Mobilbarát sablon kiválasztása
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Alap színek, logó beállítása
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Max. 5 termék feltöltése
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Fizetési módok bekötése
              </List.Item>
              <List.Item>
                <List.Indicator asChild color="green.500">
                  <FaCircleCheck />
                </List.Indicator>
                Kapcsolat oldal és alap menük
              </List.Item>
            </List.Root>
          </Box>
        </GridItem> */}
      </Grid>
    </VStack>
  );
}
