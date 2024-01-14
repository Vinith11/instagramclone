import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import google from "../../assets/google.png";

function GoogleAuth() {

    

  return (
    <Flex alignItems={"center"} cursor={"pointer"} justifyContent={"center"}>
      <Image src={google} w={5} alt="google logo" />
      <Text mx={2} color={"blue.500"}>
        Log in with Google
      </Text>
    </Flex>
  );
}

export default GoogleAuth;
