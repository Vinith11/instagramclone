import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

function Signup() {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, signup } = useSignUpWithEmailAndPassword();

  return (
    <>
      <Input
        placeholder={"Email"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        type="email"
        size={"sm"}
        fontSize={14}
      />
      <Input
        placeholder={"Username"}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        type="text"
        size={"sm"}
        fontSize={14}
      />
      <Input
        placeholder={"Full ame"}
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
        type="text"
        size={"sm"}
        fontSize={14}
      />
      <InputGroup>
        <Input
          placeholder={"Password"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          type={showPassword ? "text" : "password"}
          fontSize={14}
          size={"sm"}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        width={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign Up
      </Button>
    </>
  );
}

export default Signup;
