import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

import VpnDetectorModule from "./VpnDetectorModule";

export function isVpnActive(): boolean {
  return VpnDetectorModule.isVpnActive();
}

export function addEventListener(listener: (isVpnActive: boolean) => void) {
  let previousIsVpnActive: boolean | undefined;
  return NetInfo.addEventListener(() => {
    const currentIsVpnActive = isVpnActive();
    if (previousIsVpnActive !== currentIsVpnActive) {
      listener(currentIsVpnActive);
      previousIsVpnActive = currentIsVpnActive;
    }
  });
}

export const useIsVpnActive = () => {
  const [isVpnActiveValue, setIsVpnActive] = useState(() => isVpnActive());

  useEffect(() => addEventListener(setIsVpnActive), []);

  return isVpnActiveValue;
};
