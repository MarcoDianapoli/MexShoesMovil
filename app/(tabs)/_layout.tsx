import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Sign In', headerShown: false  }} />
      <Stack.Screen name="signup" options={{ title: 'Sign Up', headerShown: false  }} />
    </Stack>
  );
}