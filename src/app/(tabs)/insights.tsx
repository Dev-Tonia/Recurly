import { Text } from "react-native";

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function Insights() {
  return (
    <SafeAreaView className=" flex-1 items-center justify-center bg-background">
      <Text className=" text-foreground">Insights</Text>
    </SafeAreaView>
  );
}
