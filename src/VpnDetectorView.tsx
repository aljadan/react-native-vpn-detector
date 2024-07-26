import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { VpnDetectorViewProps } from './VpnDetector.types';

const NativeView: React.ComponentType<VpnDetectorViewProps> =
  requireNativeViewManager('VpnDetector');

export default function VpnDetectorView(props: VpnDetectorViewProps) {
  return <NativeView {...props} />;
}
