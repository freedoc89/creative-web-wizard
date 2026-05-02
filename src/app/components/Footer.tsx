import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { MdCopyright } from "react-icons/md";
import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { locale } = useLanguage();

  const copyRightBar = {
    HU: "2025 Kreatív Web Mágus",
    EN: "2025 Creative Web Wizard",
    DE: "2025 Kreativer Web-Magier"
  };
  return (
    <VStack
      id="page_footer"
      w="100%"
      pb={["0.5rem", "2rem"]}
      mt="3rem"
      alignItems="flex-start"
      overflow="hidden"
      gap={["2rem", "0"]}
      color="var(--footer-foreground)"
      boxShadow="0px -3px 8px 0px rgba(24, 74, 231, 0.4)"
    >
      <HStack
        w="90%"
        margin="0 auto"
        justifyContent={{ base: "center", md: "space-between" }}
        zIndex="1"
      >
        <Box marginTop="1.5rem">
          <Image
            height="auto"
            maxH={["45px", "65px"]}
            src={`/Creative_Web_Wizard_logo_${locale.toUpperCase()}.png`}
            alt="Logo"
          />
        </Box>
      </HStack>
      <HStack width="100%" justifyContent="center" gap={1}>
        <MdCopyright />
        <Text fontSize={["0.6rem", "0.8rem"]} textAlign="center">
          {copyRightBar[locale.toUpperCase() as keyof typeof copyRightBar]}
        </Text>
      </HStack>
    </VStack>
  );
}
