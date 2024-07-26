import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

import VpnDetectorModule from "./VpnDetectorModule";

/**
 * Checks if a VPN connection is active.
 * @returns {boolean} Returns true if a VPN connection is active, otherwise false.
 */
export function isVpnActive(): boolean {
  return VpnDetectorModule.isVpnActive();
}

/**
 * Adds an event listener for VPN connection status changes.
 * @param listener - A callback function that is invoked when the VPN status changes.
 * @returns A function to unsubscribe the event listener.
 */
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

/**
 * Custom React hook to get the current VPN connection status.
 * @returns Returns true if a VPN connection is active, otherwise false.
 */
export const useIsVpnActive = (): boolean => {
  const [isVpnActiveValue, setIsVpnActive] = useState<boolean>(() =>
    isVpnActive(),
  );

  useEffect(() => addEventListener(setIsVpnActive), []);

  return isVpnActiveValue;
};
