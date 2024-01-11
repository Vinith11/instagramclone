import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useState } from "react";
import google from "../../assets/google.png";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () =>{
    if(!inputs.email || !inputs.password ){
      alert("Please fill all the fields");
      return;
    }

    navigate("/");
  }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src={logo} h={24} cursor={"pointer"} alt="logo image" />
          <Input placeholder={"Email"} value={inputs.email} onChange={(e)=> setInputs({...inputs,email:e.target.value})} type="email" fontSize={14} />
          <Input placeholder={"Password"} value={inputs.password} onChange={(e)=> setInputs({...inputs,password:e.target.value})} type="password" fontSize={14} />

          {isLogin ? null : (
            <Input
              placeholder={"Confirm password"}
              value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
              type="password"
              fontSize={14}
            />
          )}

          <Button width={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Login" : "Sign up"}
          </Button>

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

          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            justifyContent={"center"}
          >
            <Image src={google} w={5} alt="google logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={()=> setIsLogin(!isLogin)} color={"blue.500"}>
            {isLogin ? "Sign up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
