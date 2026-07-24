import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function Index() {
  return (
    <SafeAreaView className=" flex-1 justify-center items-center bg-background">
      <Text className=" text-success text-2xl">Welcome to Nativewind!</Text>
    </SafeAreaView>
  );
}
