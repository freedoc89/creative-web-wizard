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
      </Grid>
    </VStack>
  );
}
