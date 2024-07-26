import { StyleSheet, Text, View } from 'react-native';

import * as VpnDetector from 'react-native-vpn-detector';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{VpnDetector.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
