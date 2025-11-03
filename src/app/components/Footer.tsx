import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <VStack
      id="page_footer"
      w="100%"
      pb={["0.5rem", "2rem"]}
      mt="3rem"
      alignItems="flex-start"
      overflow="hidden"
      gap={["2rem", "0"]}
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
            src="/Creative_Web_Wizard_logo.png"
            alt="Logo"
          />
        </Box>
      </HStack>
      <HStack width="100%" justifyContent="center" gap={1}>
        <MdCopyright />
        <Text fontSize={["0.6rem", "0.8rem"]} textAlign="center">
          2025 Kreatív Web Mágus
        </Text>
      </HStack>
    </VStack>
  );
}
