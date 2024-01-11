import { Box, Center, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import playstore from "../../assets/playstore.png"
import microsoft from "../../assets/microsoft.png"
import auth from "../../assets/auth.png"

function AuthPage() {
  return (
		<Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
			<Container maxW={"container.md"} padding={0}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={10}>
					{/* Left hand-side */}
					<Box display={{ base: "none", md: "block" }}>
						<Image src={auth} h={650} alt='Phone img' />
					</Box>

					{/* Right hand-side */}
					<VStack spacing={4} align={"stretch"}>
						<AuthForm />
						<Box textAlign={"center"}>Get the app.</Box>
						<Flex gap={5} justifyContent={"center"}>
							<Image src={playstore} h={"10"} alt='Playstore logo' />
							<Image src={microsoft} h={"10"} alt='Microsoft logo' />
						</Flex>
					</VStack>
				</Flex>
			</Container>
		</Flex>
	);
}

export default AuthPage;
