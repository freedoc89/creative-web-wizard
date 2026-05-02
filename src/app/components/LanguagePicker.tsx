"use client";

import {
  Box,
  createListCollection,
  HStack,
  Portal,
  SelectContent,
  SelectItem,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText
} from "@chakra-ui/react";
import { useLanguage } from "../hooks/useLanguage";
import { Locale } from "@/data/localization";

export const LanguagePicker = () => {
  const { locale, setLocale } = useLanguage();

  const languages = createListCollection({
    items: [
      { label: "HU", value: "hu" },
      { label: "EN", value: "en" },
      { label: "DE", value: "de" }
    ]
  });

  const flags: Record<string, React.ReactNode> = {
    EN: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="18px"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
      >
        <rect y="85.331" fill="#f0f0f0" width="512" height="341.337" />
        <g>
          <rect y="127.994" fill="#d80027" width="512" height="42.663" />
          <rect y="213.331" fill="#d80027" width="512" height="42.663" />
          <rect y="298.657" fill="#d80027" width="512" height="42.663" />
          <rect y="383.994" fill="#d80027" width="512" height="42.663" />
        </g>
        <rect y="85.331" fill="#2e52b2" width="256" height="183.797" />
        <g>
          <polygon
            fill="#f0f0f0"
            points="99.822,160.624 95.699,173.308 82.363,173.308 93.154,181.143 89.031,193.826    99.822,185.991 110.606,193.826 106.484,181.143 117.275,173.308 103.938,173.308  "
          />
          <polygon
            fill="#f0f0f0"
            points="103.938,219.08 99.822,206.397 95.699,219.08 82.363,219.08 93.154,226.916 89.031,239.599    99.822,231.763 110.606,239.599 106.484,226.916 117.275,219.08  "
          />
          <polygon
            fill="#f0f0f0"
            points="47.577,219.08 43.46,206.397 39.337,219.08 26.001,219.08 36.792,226.916 32.669,239.599    43.46,231.763 54.245,239.599 50.123,226.916 60.912,219.08  "
          />
          <polygon
            fill="#f0f0f0"
            points="43.46,160.624 39.337,173.308 26.001,173.308 36.792,181.143 32.669,193.826 43.46,185.991    54.245,193.826 50.123,181.143 60.912,173.308 47.577,173.308  "
          />
          <polygon
            fill="#f0f0f0"
            points="99.822,114.85 95.699,127.535 82.363,127.535 93.154,135.371 89.031,148.054    99.822,140.218 110.606,148.054 106.484,135.371 117.275,127.535 103.938,127.535  "
          />
          <polygon
            fill="#f0f0f0"
            points="43.46,114.85 39.337,127.535 26.001,127.535 36.792,135.371 32.669,148.054 43.46,140.218    54.245,148.054 50.123,135.371 60.912,127.535 47.577,127.535  "
          />
          <polygon
            fill="#f0f0f0"
            points="156.183,160.624 152.061,173.308 138.725,173.308 149.515,181.143 145.394,193.826    156.183,185.991 166.969,193.826 162.846,181.143 173.637,173.308 160.301,173.308  "
          />
          <polygon
            fill="#f0f0f0"
            points="160.301,219.08 156.183,206.397 152.061,219.08 138.725,219.08 149.515,226.916    145.394,239.599 156.183,231.763 166.969,239.599 162.846,226.916 173.637,219.08  "
          />
          <polygon
            fill="#f0f0f0"
            points="216.663,219.08 212.546,206.397 208.423,219.08 195.088,219.08 205.877,226.916    201.755,239.599 212.546,231.763 223.331,239.599 219.208,226.916 229.999,219.08  "
          />
          <polygon
            fill="#f0f0f0"
            points="212.546,160.624 208.423,173.308 195.088,173.308 205.877,181.143 201.755,193.826    212.546,185.991 223.331,193.826 219.208,181.143 229.999,173.308 216.663,173.308  "
          />
          <polygon
            fill="#f0f0f0"
            points="156.183,114.85 152.061,127.535 138.725,127.535 149.515,135.371 145.394,148.054    156.183,140.218 166.969,148.054 162.846,135.371 173.637,127.535 160.301,127.535  "
          />
          <polygon
            fill="#f0f0f0"
            points="212.546,114.85 208.423,127.535 195.088,127.535 205.877,135.371 201.755,148.054    212.546,140.218 223.331,148.054 219.208,135.371 229.999,127.535 216.663,127.535  "
          />
        </g>
      </svg>
    ),
    DE: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="18px"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512"
      >
        <rect y="85.331" fill="#d80027" width="512" height="341.337" />
        <rect y="85.331" fill="#000" width="512" height="113.775" />
        <rect y="312.882" fill="#ffda44" width="512" height="113.775" />
      </svg>
    ),
    HU: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="18px"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512"
      >
        <rect y="85.331" fill="#fff" width="512" height="341.337" />
        <rect y="85.331" width="512" height="113.775" fill="#ce2939" />
        <rect y="312.882" fill="#477050" width="512" height="113.775" />
      </svg>
    )
  };

  return (
    <SelectRoot
      collection={languages}
      value={[locale]}
      onValueChange={(details) => setLocale(details.value[0] as Locale)}
      size="sm"
      width="fit-content"
    >
      <SelectTrigger bg="var(--button-background)" boxShadow="none !important">
        <HStack gap="2">
          <Box width="18px" flexShrink={0}>
            {flags[locale.toUpperCase()]}
          </Box>
          <SelectValueText placeholder="Nyelv" />
        </HStack>
      </SelectTrigger>
      <Portal>
        <SelectPositioner zIndex="popover">
          <SelectContent
            zIndex="99999999"
            bg="var(--button-background)"
            _hover={{
              bg: "var(--button-hover-background)"
            }}
          >
            {languages.items.map((lang) => (
              <SelectItem item={lang} key={lang.value} color="#fff">
                <HStack gap="2">
                  <Box>
                    {flags[lang.value.toUpperCase() as keyof typeof flags]}
                  </Box>
                  {lang.label}
                </HStack>
              </SelectItem>
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </SelectRoot>
  );
};
