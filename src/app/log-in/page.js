"use client";

import { Check } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Label,
  TextField,
  Input
} from "@heroui/react";

export default function LogInPage() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error);
      } else {
        console.log("Login success:", data);
      }

    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <Card className="border mx-auto max-w-md py-10 mt-5 px-6">
      <h1 className="text-center text-2xl font-bold mb-6">Log In</h1>

      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Must include one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Must include one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            At least 8 characters, 1 uppercase & 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-3 mt-4">
          <Button type="submit" color="primary">
            <Check />
            Login
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>

      </Form>
    </Card>
  );
}