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
import FormDialog from "./FormDialog";

type PackageCardProps = {
  title: string;
  description: string | null;
  icon: IconType;
  selectedPackage: string;
  packages: PackageItem[];
};

export default function PackageCard({
  title,
  icon,
  description,
  selectedPackage,
  packages
}: PackageCardProps) {
  const Icon = icon;
  const [selectedIndex, setSelectedIndex] = useState<string | null>(
    selectedPackage
  );
  const [open, setOpen] = useState(false);
  const selectedPackageItem = packages[parseInt(selectedIndex!)];

  return (
    <>
      <Box
        boxShadow="0px 0px 1px 2px rgba(24, 74, 231, 0.6)"
        height="100%"
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
          {selectedPackageItem?.features.map((feature, index) => (
            <List.Item key={index} fontFamily="var(--secondary-font)">
              <List.Indicator asChild color="green.500" marginEnd="0.5rem">
                <FaCircleCheck />
              </List.Indicator>
              {feature}
            </List.Item>
          ))}
        </List.Root>
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
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
          <Box display="flex" alignItems="center" gap="0.2rem">
            <Text fontSize="1.2rem" mt="-6px">
              💰
            </Text>
            <Text fontFamily="var(--secondary-font)" fontSize="1.2rem">
              Ár: {formatCurrency(selectedPackageItem.price)}
            </Text>
          </Box>
          <Button
            _hover={{ bg: "var(--button-hover-background)" }}
            _active={{
              boxShadow: " 0px 1px 1px 1px rgba(24, 74, 231, 0.5)",
              transform: "translateY(1px)"
            }}
            height="fit-content"
            width={{ base: "100%", "2xl": "initial" }}
            bg="var(--button-background)"
            color="var(--foreground)"
            p="0.4rem 0.7rem"
            borderRadius="8px"
            fontSize="1.2rem"
            fontFamily="var(--secondary-font)"
            transition="background 0.2s ease-out"
            boxShadow="0px 2px 1px 1px rgba(24, 74, 231, 0.6)"
            onClick={() => setOpen(true)}
          >
            <FaHandshakeSimple />
            Megrendelem
          </Button>
          <FormDialog
            isOpen={open}
            onClose={() => setOpen(false)}
            type="rendeles"
            selectedPackage={{
              name: selectedPackageItem.name,
              description: description,
              price: selectedPackageItem.price,
              features: selectedPackageItem.features
            }}
          />
        </Flex>
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
