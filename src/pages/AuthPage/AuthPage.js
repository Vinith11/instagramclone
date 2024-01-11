import { Box, Center, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import playstore from "../../assets/playstore.png"
import microsoft from "../../assets/microsoft.png"
import phone from "../../assets/auth.png"

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={Container.md} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left side */}
        <Box display={{ base: "none", md: "block" }}>
          <Image src={phone} h={650} alt="Phone image" />
        </Box>

        {/* Right side */}
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
          <Box textAlign={"center"}>Get the app</Box>
          <Flex gap={5} justifyContent={"center"}>
            <Image src={playstore} height={"10"} alt="Logo" />
            <Image src={microsoft} height={"10"} alt="Logo" />
          </Flex>
        </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
