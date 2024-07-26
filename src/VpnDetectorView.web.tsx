import * as React from 'react';

import { VpnDetectorViewProps } from './VpnDetector.types';

export default function VpnDetectorView(props: VpnDetectorViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
