import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to VpnDetector.web.ts
// and on native platforms to VpnDetector.ts
import VpnDetectorModule from './VpnDetectorModule';
import VpnDetectorView from './VpnDetectorView';
import { ChangeEventPayload, VpnDetectorViewProps } from './VpnDetector.types';

// Get the native constant value.
export const PI = VpnDetectorModule.PI;

export function hello(): string {
  return VpnDetectorModule.hello();
}

export async function setValueAsync(value: string) {
  return await VpnDetectorModule.setValueAsync(value);
}

const emitter = new EventEmitter(VpnDetectorModule ?? NativeModulesProxy.VpnDetector);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { VpnDetectorView, VpnDetectorViewProps, ChangeEventPayload };
