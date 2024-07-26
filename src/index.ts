// Import the native module. On web, it will be resolved to VpnDetector.web.ts
// and on native platforms to VpnDetector.ts
import VpnDetectorModule from "./VpnDetectorModule";

export function isVpnActive(): boolean {
  return VpnDetectorModule.isVpnActive();
}
