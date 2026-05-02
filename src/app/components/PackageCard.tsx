"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  List,
  RadioGroup,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaCircleCheck } from "react-icons/fa6";
import FormDialog from "./FormDialog";
import { Plan } from "@/data/packages";
import { Locale } from "@/data/localization";
import { usePrice } from "../hooks/usePrice";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

type PackageCardProps = {
  title: string;
  description: string | null;
  icon: IconType;
  selectedPackage: string | null;
  plans: Plan[] | null;
  locale: Locale;
  buttonContent: string;
};

export default function PackageCard({
  title,
  icon,
  description,
  selectedPackage,
  plans,
  locale,
  buttonContent
}: PackageCardProps) {
  const { formatPrice } = usePrice(locale);
  const Icon = icon;
  const [selectedIndex, setSelectedIndex] = useState<string | null>(
    selectedPackage
  );
  const [open, setOpen] = useState(false);
  const selectedPackageItem =
    plans && plans.length > 0 ? plans[parseInt(selectedIndex || "0")] : null;
  const priceLabels = {
    hu: { label: "Ár", suffix: "-tól", prefix: "" },
    en: { label: "Price", suffix: "", prefix: "from " },
    de: { label: "Preis", suffix: "", prefix: "ab " }
  };

  const formattedPrice =
    `${priceLabels[locale as Locale]?.prefix || ""} ${formatPrice(selectedPackageItem?.price ?? 0)} ${priceLabels[locale as Locale]?.suffix || ""}`.trim();
  return (
    <>
      <Box
        boxShadow="var(--card-shadow)"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        position="relative"
        borderRadius="5px"
        padding={["20px", "30px"]}
        border="var(--card-border)"
        backgroundColor="var(--card-background)"
      >
        <HStack
          alignItems="flex-start"
          borderBottom="2px solid rgba(255,255,255,.3)"
          pb="1rem"
        >
          <Box height={["4rem", "6rem"]} width={["5rem", "6rem"]}>
            <Icon size="100%" fill="var(--icons-color)" />
          </Box>
          <Heading
            as="h2"
            fontFamily="var(--main-font)"
            fontSize={["2.2rem", "2.8rem"]}
            lineHeight="1.1"
            fontWeight="700"
          >
            {title}
          </Heading>
        </HStack>
        {plans && plans.length > 0 && (
          <RadioGroup.Root
            value={selectedIndex}
            onValueChange={(e) => setSelectedIndex(e.value!)}
            mt="1rem"
            mb="1rem"
            borderBottom="2px solid rgba(255,255,255,.3)"
            pb="1rem"
          >
            <Flex
              gap="3"
              flexDirection={["column", "row", "row"]}
              wrap={["wrap", "nowrap"]}
            >
              {plans.map((item, index) => (
                <RadioGroup.Item
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  key={index}
                  value={index.toString()}
                  style={{
                    padding: "0.4rem 0.7rem",
                    borderRadius: "8px",
                    background: "#8ca1e1",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontFamily: "var(--main-font)",
                    transition: "all 0.25s ease",
                    opacity: selectedIndex === index.toString() ? 1 : 0.85
                  }}
                  _checked={{
                    background: "#031640 !important",
                    color: "#fff"
                  }}
                  _hover={{
                    background: "#3e549d !important"
                  }}
                >
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemText>{item.name[locale]}</RadioGroup.ItemText>
                </RadioGroup.Item>
              ))}
            </Flex>
          </RadioGroup.Root>
        )}
        {selectedPackageItem ? (
          <List.Root gap="2" variant="plain" align="center">
            {selectedPackageItem?.features[locale].map((feature, index) => (
              <List.Item key={index} fontFamily="var(--secondary-font)">
                <List.Indicator asChild color="green.500" marginEnd="0.5rem">
                  <FaCircleCheck />
                </List.Indicator>
                {feature}
              </List.Item>
            ))}
          </List.Root>
        ) : (
          <Text fontFamily="var(--secondary-font)" fontSize="1.1rem">
            {description}
          </Text>
        )}

        <Flex
          justifyContent="space-between"
          alignItems={{ base: "stretch", "2xl": "flex-end" }}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "column",
            "2xl": "row"
          }}
          borderTop="2px solid rgba(255,255,255,.3)"
          mt="1rem"
          pt="1rem"
          gap={["1rem", "1rem"]}
        >
          {selectedPackageItem && (
            <Box
              display="flex"
              alignItems="center"
              gap="0.2rem"
              alignSelf={{ "2xl": "flex-end" }}
            >
              <Text fontSize="1.2rem" mt="-6px">
                💰
              </Text>
              <Text fontFamily="var(--secondary-font)" fontSize="1.2rem">
                {formattedPrice}
              </Text>
            </Box>
          )}
          <Button
            _hover={{ bg: "var(--button-hover-background)" }}
            _active={{
              boxShadow: " 0px 1px 1px 1px rgba(24, 74, 231, 0.5)",
              transform: "translateY(1px)"
            }}
            height="fit-content"
            width={{ base: "100%", "2xl": "initial" }}
            bg="var(--button-background)"
            p="0.4rem 0.7rem"
            borderRadius="8px"
            fontSize="1.2rem"
            fontFamily="var(--secondary-font)"
            transition="background 0.2s ease-out"
            boxShadow="0px 2px 1px 1px rgba(24, 74, 231, 0.6)"
            onClick={() => setOpen(true)}
          >
            {/* <FaHandshakeSimple /> */}
            <HiChatBubbleLeftRight />

            {buttonContent}
          </Button>
          <FormDialog
            isOpen={open}
            onClose={() => setOpen(false)}
            type={selectedPackageItem ? "consultation" : "quote_request"}
            selectedPackage={{
              name: selectedPackageItem?.name[locale] || "Egyedi csomag",
              label: title,
              description: description,
              price: formattedPrice,
              features: selectedPackageItem?.features[locale] || []
            }}
          />
        </Flex>
      </Box>
    </>
  );
}
