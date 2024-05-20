import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate an authentication check
    setIsLoggedIn(false); // Change this to true to simulate a logged-in user
  }, []);

  return (
    <SafeAreaProvider>
      {isLoggedIn ? <Redirect href="/PostLogin" /> : <Redirect href="/home" />}
    </SafeAreaProvider>
  );
}
