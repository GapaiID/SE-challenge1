import { Grid, GridItem, useToast } from "@chakra-ui/react";
import { AuthButton, AuthCard, AuthFormControl, AuthLink } from "../Components";
import AuthTextArea from "../Components/AuthTextArea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../stores/user/user.action";

export default function RegisterPage() {
  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const toaster = useToast();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    profile_pic: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = async (form) => {
    return new Promise((res, rej) => {
      for (const key in form) {
        if (!form[key] && key !== "profile_pic") {
          rej(`${key} is not filled.`);
        }
      }

      res();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validateForm(form);

      const name = await dispatcher(register(form));

      toaster({
        status: "error",
        description: `${name} has been successfully registered.`,
        title: "Please fill all form",
        duration: 1700,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });

      navigator("/");
    } catch (err) {
      let msg;

      if (typeof err === "string") {
        msg = err;
        return toaster({
          status: "error",
          description: msg,
          title: "Please fill all form",
          duration: 1700,
          isClosable: true,
          position: "top-right",
          variant: "left-accent",
        });
      }

      if (err?.data) {
        msg = err.data.message[0];

        return toaster({
          status: "error",
          description: msg,
          title: "Invalid data",
          duration: 1700,
          isClosable: true,
          position: "top-right",
          variant: "left-accent",
        });
      }

      if (err?.message) {
        msg = err.message;

        return toaster({
          status: "error",
          description: msg,
          title: "Something is wrong",
          duration: 1700,
          isClosable: true,
          position: "top-right",
          variant: "left-accent",
        });
      }
    }
  };

  return (
    <AuthCard>
      <Grid
        as="form"
        templateAreas={`"form1 form2"
      "form3 form4"
      "form5 form5"
      "button button"`}
        gridTemplateRows={"auto"}
        gridTemplateColumns={"45% 1fr"}
        h="100%"
        columnGap="5%"
        rowGap="1.4rem"
        onSubmit={handleSubmit}
      >
        <GridItem area="form1">
          <AuthFormControl
            placeholder="Your email here"
            label="Email"
            type="email"
            name="email"
            func={handleChange}
          />
        </GridItem>
        <GridItem area="form2">
          <AuthFormControl
            placeholder="Your pasword here"
            label="Password"
            type="password"
            name="password"
            func={handleChange}
          />
        </GridItem>
        <GridItem area="form3">
          <AuthFormControl
            placeholder="Your name here"
            label="Name"
            name="name"
            func={handleChange}
          />
        </GridItem>
        <GridItem area="form4">
          <AuthFormControl
            placeholder="Profile picture link"
            label="Profile Picture"
            name="profile_pic"
            func={handleChange}
          />
        </GridItem>
        <GridItem area="form5">
          <AuthTextArea
            placeholder="Tell yourself more"
            label="Description"
            name="description"
            func={handleChange}
          />
        </GridItem>
        <GridItem area="button" display="flex" justifyContent="center">
          <AuthButton text="Register Account" />
        </GridItem>
      </Grid>

      <AuthLink
        route="/auth/login"
        text="Already have an account? login here"
      />
    </AuthCard>
  );
}
