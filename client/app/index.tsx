import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack>
      {isLoggedIn ? (
          <Stack.Screen name="HomeScreen" />
        ) : (
          <Stack.Screen name="LoginScreen" />
        )}
    </Stack>
  );
}
