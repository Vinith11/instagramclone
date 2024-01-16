import { Box, VStack, Image, Flex, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src={logo} h={24} cursor={"pointer"} alt="logo image" />

          {isLogin ? <Login /> : <Signup />}

          {/* Or part */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              Or
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign Up"} />
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"}>
            {isLogin ? "Sign up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
