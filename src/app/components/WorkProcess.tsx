import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLanguage } from "../hooks/useLanguage";

// 1. Fordítások definiálása
const processContent = {
  title: {
    hu: "Hogyan dolgozom?",
    en: "How I work?",
    de: "Wie ich arbeite?"
  },
  steps: [
    {
      id: "consultation",
      icon: "./consultation_icon.png",
      label: { hu: "Konzultáció", en: "Consultation", de: "Beratung" }
    },
    {
      id: "planning",
      icon: "./planning_icon.png",
      label: { hu: "Tervezés", en: "Planning", de: "Planung" }
    },
    {
      id: "develop",
      icon: "./develop_icon.png",
      label: { hu: "Fejlesztés", en: "Development", de: "Entwicklung" }
    },
    {
      id: "handover",
      icon: "./handover_icon.png",
      label: { hu: "Átadás", en: "Handover", de: "Übergabe" }
    }
  ]
};

const ProcessArrow = () => (
  <Box
    display="inline-block"
    transform={{ base: "rotate(90deg)", md: "rotate(0deg)" }}
    transition="transform 0.3s ease"
    my={{ base: "1rem", md: "0" }}
  >
    <FaArrowRightLong color="#8ca1e1" size="2rem" />
  </Box>
);

export const WorkProcess = () => {
  const { locale } = useLanguage();
  const l = locale as "hu" | "en" | "de";

  return (
    <Box as="section" w="100%" py={["3rem", "5rem"]}>
      <Heading
        mt={["5rem", "7rem"]}
        color="var(--foreground)"
        fontSize={["2rem", "3rem"]}
        mb={["2rem", "4rem"]}
        textTransform="uppercase"
        textAlign="center"
        fontFamily="var(--main-font)"
        textDecoration="underline"
        textUnderlineOffset={["6px", "8px"]}
      >
        {processContent.title[l]}
      </Heading>

      <Flex
        justifyContent="center"
        gap={{ base: "1rem", md: "1.5rem" }}
        alignItems="center"
        flexDirection={["column", "row"]}
      >
        {processContent.steps.map((step, index) => (
          <Flex
            key={step.id}
            alignItems="center"
            flexDirection={["column", "row"]}
            gap={{ base: "1rem", md: "1.5rem" }}
          >
            <VStack gap={0} alignItems="center">
              <Image
                src={step.icon}
                alt={step.label[l]}
                height="80px"
                margin={0}
                draggable={false}
              />
              <Heading
                fontSize="1.5rem"
                padding={0}
                margin={0}
                textAlign="center"
                color="var(--foreground)"
              >
                {step.label[l]}
              </Heading>
            </VStack>

            {index < processContent.steps.length - 1 && <ProcessArrow />}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
