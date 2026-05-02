import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import stacks from "@/data/stacks";
import { useLanguage } from "../hooks/useLanguage";

export default function Technologies() {
  const duplicatedStacks = [...stacks.items, ...stacks.items];
  const { locale } = useLanguage();
  return (
    <Box
      as="section"
      id="technologies"
      w="100%"
      mt="2rem"
      py={["2rem", "4rem"]}
      overflow="hidden"
      bg="var(--background)"
      borderTop="1px solid var(--foreground-muted)"
      borderBottom="1px solid var(--foreground-muted)"
    >
      <Heading
        mt={["5rem", "7rem"]}
        color="var(--foreground)"
        fontSize={["2rem", "3rem"]}
        mb={["2rem", "4rem"]}
        textTransform="uppercase"
        textAlign="center"
        fontFamily="var(--main-font)"
        textDecoration="underline"
      >
        {stacks.title[locale]}
      </Heading>
      <Flex className="animate-marquee" gap="3rem" px="1.5rem">
        {duplicatedStacks.map((stack, index) => (
          <Flex
            key={`${stack.name}-${index}`}
            alignItems="center"
            gap="1rem"
            minW="max-content"
          >
            <Icon
              as={stack.icon}
              boxSize={["2.2rem", "2.8rem"]}
              color="var(--foreground)"
              transition="color 0.2s ease-in-out"
              _hover={{ color: "var(--primary-color)" }}
            />
            <Text
              fontFamily="var(--main-font)"
              fontSize={["1.1rem", "1.4rem"]}
              fontWeight="600"
              color="var(--foreground)"
              textTransform="uppercase"
              letterSpacing="0.05em"
            >
              {stack.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
