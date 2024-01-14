import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

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

      <Button width={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Login
      </Button>
    </>
  );
}

export default Login;
