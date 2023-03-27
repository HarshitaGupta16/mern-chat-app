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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setConfirmShowPass] = useState(false);

  const handlePassClick = () => {
    setShowPass(!showPass);
  };
  const handleConfPassClick = () => {
    setConfirmShowPass(!showConfirmPass);
  };

  const postDetails = (pics) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired style={{ marginBottom: 10 }}>
        <FormLabel style={{ marginBottom: 0 }}>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>
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
            type={showPass ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement>
            <IconButton onClick={handlePassClick}>
              {showPass ? <ViewOffIcon /> : <ViewIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl
        id="confirm-password"
        isRequired
        style={{ marginBottom: 10 }}
      >
        <FormLabel style={{ marginBottom: 0 }}>Confirm Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={showConfirmPass ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <InputRightElement>
            <IconButton onClick={handleConfPassClick}>
              {showConfirmPass ? <ViewOffIcon /> : <ViewIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic" style={{ marginBottom: 10 }}>
        <FormLabel style={{ marginBottom: 0 }}>
          Upload your profile picture
        </FormLabel>
        <Input
          type={"file"}
          p={"1.5"}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme={"cyan"}
        width="100%"
        style={{ marginTop: 25 }}
        onClick={submitHandler}
        bg="linear-gradient(to right, lightgreen , skyblue)"
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
