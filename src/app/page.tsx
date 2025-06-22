"use client";
import { IconButton } from "@chakra-ui/react";
import { IoChevronUp } from "react-icons/io5";
import Header from "./components/Header";
import Packages from "./components/Packages";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <Header />
      <Services />
      <Packages />
      <Footer />

      <IconButton
        aria-label=""
        top="90%"
        right="30px"
        position="fixed"
        bg="whiteAlpha.400"
        color="whiteAlpha.700"
        rounded="md"
        _hover={{ color: "whiteAlpha.900" }}
        onClick={scrollToTop}
      >
        <IoChevronUp />
      </IconButton>
    </>
  );
}
