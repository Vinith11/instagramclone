import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, login, error } = useLogin();

  return (
    <>
      <Input
        placeholder={"Email"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        type="email"
        fontSize={14}
      />
      <Input
        placeholder={"Password"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        type="password"
        fontSize={14}
      />

      {error && (
        <Alert status="error" fontSize={14} p={2} borderRadius={4}>
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
        onClick={() => login(inputs)}
      >
        Login
      </Button>
    </>
  );
}

export default Login;
