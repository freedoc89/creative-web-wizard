import packages from "@/data/packages";
import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import PackageCard from "./PackageCard";
import { useLanguage } from "../hooks/useLanguage";

export default function Packages() {
  const { locale } = useLanguage();

  return (
    <VStack id="packages">
      <Heading
        mt={["5rem", "7rem"]}
        color="var(--foreground)"
        fontSize={["2rem", "3rem"]}
        mb={["2rem", "4rem"]}
        textTransform="uppercase"
        fontFamily="var(--main-font)"
        textDecoration="underline"
      >
        {packages.title[locale]}
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)"
        }}
        maxW={["90%", "80%"]}
        gap={6}
        justifyItems={["center", "initial"]}
        justifyContent="center"
      >
        {packages.groups.map((pack, index) => (
          <GridItem key={index}>
            <PackageCard
              title={pack.label[locale]}
              icon={pack.icon}
              selectedPackage={
                packages.groups[index].plans &&
                packages.groups[index].plans.length > 1
                  ? "1"
                  : "0"
              }
              plans={pack.plans}
              description={pack.description && ""}
              locale={locale}
              buttonContent={pack.buttonContent[locale]}
            />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
}
