// app/index.ts
import { Redirect } from "expo-router";
import "expo-router/entry";

export default function Index() {
  return <Redirect href="/home" />;
}
