import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src={logo} h={24} cursor={"pointer"} alt="logo image" />
        <Input placeholder={"Email"} type="email" fontSize={14} />
        <Input placeholder={"Password"} type="password" fontSize={14} />

        {isLogin ? (
          <Input
            placeholder={"Confirm password"}
            type="password"
            fontSize={14}
          />
        ) : null}

        <Button width={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
            {isLogin ? "Sign up" : "Login"}
        </Button>


            {/* Or part */}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"} >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>Or</Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>
      </VStack>
    </Box>
  );
}

export default AuthForm;
