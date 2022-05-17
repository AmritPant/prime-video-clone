import React from "react";
import { Box, Image, Link } from "@chakra-ui/react";
import primevideoLogo from "../../../public/images/primevideo.svg";

function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgColor="rgb(26,35,46)"
      p="1rem 2rem"
    >
      <Box>
        <Link href="">
          <Image
            h="8rem"
            w="11rem"
            src={primevideoLogo.src}
            alt="Prime Video Logo"
            mt="-2rem"
          />
        </Link>
      </Box>
      <Box mt="-2rem">
        <Link fontSize="1.6rem" color="rgba(242,244,246,.9)" href="/login">
          Log In
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
