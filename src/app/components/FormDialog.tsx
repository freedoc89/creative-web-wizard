"use client";
import { toaster } from "@/components/ui/toaster";
import services from "@/data/services";
import {
  Box,
  Button,
  Dialog,
  DialogBackdrop,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogTitle,
  Field,
  Flex,
  Input,
  Portal,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiMailSendLine } from "react-icons/ri";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, "Név kötelező"),
  email: z.string().email("Érvénytelen email formátum"),
  message: z.string().min(10, "Minimum 10 karakter")
});

type FormData = z.infer<typeof schema>;

type FormDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  type: "ajanlat" | "rendeles";
  selectedPackage?: {
    name: string;
    label: string;
    description: string | null;
    price: number;
    features: string[];
  };
};

export default function FormDialog({
  isOpen,
  onClose,
  type,
  selectedPackage
}: FormDialogProps) {
  const [selectedIndex, setSelectedIndex] = useState<string | null>("1");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const onSubmit = async (data: FormData) => {
    const fullData = {
      ...data,
      type,
      selectedPackage
    };

    //console.log("Küldés:", fullData);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData)
      });

      const res = await response.json();

      if (res.success) {
        //console.log("Email sikeresen elküldve");
        toaster.create({
          title:
            type === "ajanlat"
              ? "Ajánlatkérés elküldve!"
              : "Megrendelés sikeres!",
          description: "Hamarosan felvesszük Önnel a kapcsolatot.",
          type: "success",
          duration: 4000,
          closable: true
        });
      } else {
        console.error("Email küldés sikertelen");
        toaster.create({
          title: "Hiba történt!",
          description: "A küldés sikertelen volt.",
          type: "error",
          duration: 4000
        });
      }
    } catch (error) {
      console.error("Hálózati hiba:", error);
    }

    reset();
    onClose();
  };

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Portal>
        <DialogBackdrop bg="rgba(0, 0, 0, 0.8)" backdropFilter="blur(8px)" />
        <DialogPositioner
          maxW="95%"
          padding={["2px", "initial"]}
          left="50%"
          style={{ transform: "translateX(-50%)" }}
        >
          <DialogContent
            boxShadow="var(--card-shadow)"
            backgroundColor="var(--card-background)"
            padding={["1rem", "initial"]}
            border="var(--card-border)"
            color=" var(--foreground)"
            fontFamily="var(--main-font)"
          >
            <DialogHeader justifyContent="center">
              <DialogTitle
                fontSize="2rem"
                fontWeight="700"
                color="var(--foreground)"
              >
                {type === "ajanlat" ? "Ajánlatkérés" : "Megrendelés"}
              </DialogTitle>
            </DialogHeader>
            <DialogBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap="4">
                  <Field.Root>
                    <Field.Label color=" var(--foreground)">Név</Field.Label>
                    <Input {...register("name")} placeholder="Teljes név" />
                    {errors.name && (
                      <Box color="red.300" fontSize="0.8rem">
                        {errors.name.message}
                      </Box>
                    )}
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Email</Field.Label>
                    <Input {...register("email")} placeholder="Email cím" />
                    {errors.email && (
                      <Box color="red.300" fontSize="0.8rem">
                        {errors.email.message}
                      </Box>
                    )}
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Üzenet</Field.Label>
                    <Textarea
                      {...register("message")}
                      placeholder="Írd le mire van szükséged..."
                    />
                    {errors.message && (
                      <Box color="red.300" fontSize="0.8rem">
                        {errors.message.message}
                      </Box>
                    )}
                  </Field.Root>
                  {type === "ajanlat" && (
                    <Field.Root>
                      <Field.Label>Szolgáltatás típusa</Field.Label>
                      <RadioGroup.Root
                        value={selectedIndex}
                        onValueChange={(e) => setSelectedIndex(e.value!)}
                        mt="1rem"
                        mb="1rem"
                        borderBottom="2px solid rgba(255,255,255,.3)"
                        pb="1rem"
                        width="100%"
                      >
                        <Flex
                          gap="3"
                          flexDirection={["column !important", "row", "row"]}
                          wrap={["wrap", "nowrap"]}
                        >
                          {services.map((item, index) => (
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
                              <RadioGroup.ItemText>
                                {item.label}
                              </RadioGroup.ItemText>
                            </RadioGroup.Item>
                          ))}
                        </Flex>
                      </RadioGroup.Root>
                      {!selectedIndex && (
                        <span style={{ color: "red", fontSize: "0.8rem" }}>
                          Kérlek válassz egy szolgáltatást
                        </span>
                      )}
                    </Field.Root>
                  )}
                  {type === "rendeles" && (
                    <VStack width="100%" alignItems="start">
                      <Text>Kiválasztott szolgáltatás</Text>
                      <Box
                        border="1px solid var(--foreground)"
                        p="3"
                        borderRadius="md"
                      >
                        <strong style={{ marginRight: "0.3rem" }}>
                          Csomag:{" "}
                        </strong>
                        {selectedPackage?.label.replace("Csomagok", "")}-{" "}
                        {selectedPackage!.name} –{" "}
                        {selectedPackage!.price.toLocaleString("hu-HU")} Ft
                        {selectedPackage!.description && (
                          <span
                            style={{
                              fontSize: "0.63rem",
                              fontWeight: "lighter",
                              font: "status-bar",
                              display: "inline-block",
                              whiteSpace: "pre-line",
                              opacity: "0.6"
                            }}
                          >
                            *{selectedPackage!.description.replace(".", ".\n")}
                          </span>
                        )}
                      </Box>
                    </VStack>
                  )}
                  <Text font="status-bar" px={3}>
                    A megrendelési igény/ajánlatkérés leadása után felvesszük
                    Önnel a kapcsolatot a részletek tisztázása és a
                    szerződéskötés érdekében.
                  </Text>
                </Stack>

                <DialogFooter
                  mt="4"
                  flexDirection={["column-reverse", "initial"]}
                >
                  <Button
                    onClick={() => {
                      onClose();
                      reset();
                    }}
                    _hover={{ bg: "var(--cancel-button-hover-background)" }}
                    _active={{
                      boxShadow: " 0px 1px 1px 1px rgba(231, 24, 24, 0.5)",
                      transform: "translateY(1px)"
                    }}
                    height="fit-content"
                    width={{
                      base: "100%",
                      sm: "auto",
                      md: "auto",
                      "2xl": "initial"
                    }}
                    bg="var(--cancel-button-background)"
                    color="var(--foreground)"
                    p="0.4rem 0.7rem"
                    borderRadius="8px"
                    fontSize="1.2rem"
                    fontFamily="var(--secondary-font)"
                    transition="background 0.2s ease-out"
                    boxShadow="0px 2px 1px 1px rgba(231, 24, 24, 0.6)"
                  >
                    Mégse
                  </Button>
                  <Button
                    type="submit"
                    _hover={{ bg: "var(--button-hover-background)" }}
                    _active={{
                      boxShadow: " 0px 1px 1px 1px rgba(24, 74, 231, 0.5)",
                      transform: "translateY(1px)"
                    }}
                    height="fit-content"
                    width={{
                      base: "100%",
                      sm: "auto",
                      md: "auto",
                      "2xl": "initial"
                    }}
                    bg="var(--button-background)"
                    color="var(--foreground)"
                    p="0.4rem 0.7rem"
                    borderRadius="8px"
                    fontSize="1.2rem"
                    fontFamily="var(--secondary-font)"
                    transition="background 0.2s ease-out"
                    boxShadow="0px 2px 1px 1px rgba(24, 74, 231, 0.6)"
                  >
                    <RiMailSendLine />
                    {type === "ajanlat"
                      ? "Ajánlat küldése"
                      : "Megrendelem"}{" "}
                  </Button>
                </DialogFooter>
              </form>
            </DialogBody>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </Dialog.Root>
  );
}
