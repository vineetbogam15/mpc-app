// app/login.tsx
import React from "react";
import { FormEvent } from "react";
import { useState } from "react";
import { View, Text } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("John");
  const [password, setPassword] = useState("Doe");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can perform any form submission logic here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginScreen;
