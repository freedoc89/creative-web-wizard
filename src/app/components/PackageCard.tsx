"use client";

import { PackageItem } from "@/data/packages";
import { formatCurrency } from "@/utils/formatCurrency";
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
import { FaHtml5, FaShopify, FaWordpress } from "react-icons/fa";
import { FaCircleCheck, FaHandshakeSimple } from "react-icons/fa6";

type PackageCardProps = {
  title: string;
  icon: string;
  selectedPackage: string;
  packages: PackageItem[];
};

export default function PackageCard({
  title,
  icon,
  selectedPackage,
  packages
}: PackageCardProps) {
  const Icon = getIcon(icon);
  const [selectedIndex, setSelectedIndex] = useState<string | null>(
    selectedPackage
  );
  const selectedPackageList = packages[parseInt(selectedIndex!)];

  return (
    <>
      <Box
        position="relative"
        borderRadius="5px"
        padding={["20px", "30px"]}
        backgroundColor="#000f2e"
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
            {packages.map((item, index) => (
              <RadioGroup.Item
                display="flex"
                justifyContent="center"
                width="100%"
                key={index}
                value={index.toString()}
                style={{
                  padding: "0.4rem 0.7rem",
                  borderRadius: "8px",
                  background: "#031640",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontFamily: "var(--main-font)",
                  transition: "all 0.25s ease"
                }}
                _checked={{
                  background: "#184ae7 !important",
                  color: "#fff"
                }}
                _hover={{
                  background: "#10319E !important"
                }}
              >
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemText>{item.name}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </Flex>
        </RadioGroup.Root>

        <List.Root gap="2" variant="plain" align="center">
          {selectedPackageList?.features.map((feature, index) => (
            <List.Item key={index} fontFamily="var(--secondary-font)">
              <List.Indicator asChild color="green.500">
                <FaCircleCheck />
              </List.Indicator>
              {feature}
            </List.Item>
          ))}
        </List.Root>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          borderTop="2px solid rgba(255,255,255,.3)"
          mt="1rem"
          pt="1rem"
        >
          <Box display="flex" alignItems="center" gap="0.2rem">
            <Text fontSize="1.2rem" mt="-6px">
              💰
            </Text>
            <Text fontFamily="var(--secondary-font)" fontSize="1.2rem">
              Ár: {formatCurrency(selectedPackageList.price)}
            </Text>
          </Box>
          <Button
            height="fit-content"
            bg="var(--button-background)"
            color="var(--foreground)"
            p="0.4rem 0.7rem"
            borderRadius="8px"
            fontSize="1.2rem"
            fontFamily="var(--secondary-font)"
            _hover={{ bg: "var(--button-hover-background)" }}
            transition="background 0.2s ease-out"
          >
            <FaHandshakeSimple />
            Megrendelem
          </Button>
        </HStack>
      </Box>
    </>
  );
}

const iconMap: Record<string, IconType> = {
  shopify: FaShopify,
  wordpress: FaWordpress,
  html5: FaHtml5
};

export function getIcon(name: string): IconType {
  return iconMap[name] || FaHtml5;
}
