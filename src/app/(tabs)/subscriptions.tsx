import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function Subscriptions() {
  return (
    <SafeAreaView className=" bg-background flex-1 justify-center items-center">
      <Text className="text-red-400">Subscriptions</Text>
    </SafeAreaView>
  );
}
