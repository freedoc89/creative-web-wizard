import { Box, HStack, Image, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <VStack
      id="page_footer"
      w="100%"
      pb="2rem"
      mt="3rem"
      alignItems="flex-start"
      overflow="hidden"
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
            maxH={["65px", "75px"]}
            src="/Creative_Web_Wizard_logo.png"
            alt="Logo"
          />
        </Box>
      </HStack>
    </VStack>
  );
}
