import { Text } from "react-native";

import { colors } from "@/constants/theme";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function SubscriptionDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={{ color: colors.foreground }}>
        SubscriptionDetailsScreen
      </Text>
    </SafeAreaView>
  );
}
