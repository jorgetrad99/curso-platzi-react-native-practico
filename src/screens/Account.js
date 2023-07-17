import React from "react";
import { View, Text } from "react-native";
import { LoginForm, UserData } from "../components/Auth";

export default function Account() {

  const auth = null;

  return (
    <View>
      { auth ? <UserData /> : <LoginForm />}
    </View>
  );
}
