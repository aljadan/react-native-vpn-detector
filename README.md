# 🌐 react-native-vpn-detector

**React Native module to detect VPN connection**

## 📦 Installation

To install the module, you can use npm:

```bash
## You must install @react-native-community/netinfo first
npx expo install @react-native-community/netinfo
npm install react-native-vpn-detector
```

## ⚠️ Note

The VPN detector does not work on simulators. Please test on a real device.

## 🚀 Usage

### 🧩 `useIsVpnActive`

The `useIsVpnActive` hook provides a way to use the VPN connection status within a React component.

```javascript
import React from "react";
import { View, Text } from "react-native";
import { useIsVpnActive } from "react-native-vpn-detector";

const App = () => {
  const isVpnActive = useIsVpnActive();

  return (
    <View>
      <Text>VPN is {isVpnActive ? "active" : "inactive"}</Text>
    </View>
  );
};
```

### 🔍 `isVpnActive`

The `isVpnActive` function checks if a VPN connection is active.

```javascript
import React from "react";
import { View, Text } from "react-native";
import { isVpnActive } from "react-native-vpn-detector";

const value = isVpnActive();
const App = () => {
  return (
    <View>
      <Text>VPN is {value ? "active" : "inactive"}</Text>
    </View>
  );
};
```

### 📡 `addEventListener`

The `addEventListener` function listens for changes in the VPN connection status.

```javascript
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { addEventListener } from "react-native-vpn-detector";

const App = () => {
  useEffect(() => {
    const listener = (isVpnActive) => {
      console.log(`VPN is now ${isVpnActive ? "active" : "inactive"}`);
    };

    const unsubscribe = addEventListener(listener);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View>
      <Text>Listening for VPN status changes...</Text>
    </View>
  );
};
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or enhancements.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.