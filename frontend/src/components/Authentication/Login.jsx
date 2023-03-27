import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {};

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired style={{ marginBottom: 10 }}>
        <FormLabel style={{ marginBottom: 0 }}>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired style={{ marginBottom: 10 }}>
        <FormLabel style={{ marginBottom: 0 }}>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement>
            <IconButton onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme={"cyan"}
        width="100%"
        style={{ marginTop: 25 }}
        onClick={submitHandler}
        bg="linear-gradient(to right, lightgreen , skyblue)"
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
