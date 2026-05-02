import { Box, HStack, Image } from "@chakra-ui/react";
import { LanguagePicker } from "./LanguagePicker";
import { useLanguage } from "../hooks/useLanguage";

export default function Navbar() {
  const { locale } = useLanguage();
  return (
    <HStack
      id="page_header"
      top={0}
      zIndex="1000"
      position="sticky"
      boxShadow="0px 2px 8px 0px rgba(24, 74, 231, 0.4)"
      justifyContent="space-between"
      p={3}
    >
      <Box>
        <Image
          height="auto"
          maxH={["45px", "60px"]}
          src={`/Creative_Web_Wizard_logo_${locale.toUpperCase()}.png`}
          alt="Logo"
        />
      </Box>

      <LanguagePicker />
    </HStack>
  );
}
