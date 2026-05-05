"use client";

import { Check } from "@gravity-ui/icons";
import Link from "next/link";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function RegisterPage() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      image: form.image.value,
    };

    console.log("Form data:", payload);

    try {

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Registration successful ✅");
      form.reset();

    } catch (err) {
      console.error("Error:", err.message);
      alert("Something went wrong ❌");
    }
  };

  return (
    <Card className="border mx-auto max-w-md p-8 mt-10 shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-4">
        Register
      </h1>

      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        
        {/* Name */}
        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* Image */}
        <TextField isRequired name="image">
          <Label>Image URL</Label>
          <Input placeholder="https://example.com/image.jpg" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Invalid email";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) return "Minimum 8 characters";
            if (!/[A-Z]/.test(value)) return "Need uppercase";
            if (!/[0-9]/.test(value)) return "Need number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Password" />
          <Description>
            At least 8 characters, 1 uppercase, 1 number
          </Description>
          <FieldError />
        </TextField>

        Buttons
        <div className="flex gap-2">
          <Button type="submit" className="w-full">
            <Check />
            Submit
          </Button>
          <p className="text-center text-sm mt-4">
           Already have an account?{" "}
           <Link href="/login" className="text-blue-500 font-semibold">
           Login
            </Link>
            </p>
          <p className="text-center text-sm mt-4">
           Already have an account?{" "}
           <Link href="/login" className="text-blue-500 font-semibold">
           Login
            </Link>
            </p>

          <Button type="reset" variant="secondary" className="w-full">
            Reset
          </Button>
        </div>

      </Form>
    </Card>
  );
}