import { colors } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

export default function SignUp() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ color: colors.foreground }}>SignUp</Text>
    </View>
  );
}
