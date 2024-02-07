import { Box, useToast } from "@chakra-ui/react";
import { AuthButton, AuthCard, AuthFormControl, AuthLink } from "../Components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../stores/user/user.action";

export default function LoginPage() {
  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const toaster = useToast();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatcher(login(form));

      toaster({
        status: "success",
        title: "You are logged in.",
        duration: 1700,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });

      navigator("/");
    } catch (err) {
      toaster({
        status: "error",
        title: err?.message ?? err,
        duration: 1700,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
    }
  };

  return (
    <AuthCard>
      <Box
        as="form"
        display="flex"
        flexDir="column"
        w="70%"
        rowGap="2rem"
        onSubmit={handleSubmit}
      >
        <AuthFormControl
          placeholder="Put your email here"
          label="Email"
          type="email"
          name="email"
          func={handleChange}
        />
        <AuthFormControl
          placeholder="Put your password here"
          label="Password"
          type="password"
          name="password"
          func={handleChange}
        />
        <AuthButton text="Login" />
      </Box>

      <AuthLink
        route="/auth/register"
        text="Haven't register yet? register here"
      />
    </AuthCard>
  );
}
