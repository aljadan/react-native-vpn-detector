import { StyleSheet, Text, View } from "react-native";
import { useIsVpnActive } from "react-native-vpn-detector";

export default function App() {
  const isVpnActive = useIsVpnActive();
  return (
    <View style={styles.container}>
      <Text>{isVpnActive ? "VPN is active" : "VPN is not active"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
