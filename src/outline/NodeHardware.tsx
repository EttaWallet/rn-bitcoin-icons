import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgNodeHardware = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <Path d="M20.54 9.984v4.123a.694.694 0 0 1-.356.644l-7.13 4.024a2.099 2.099 0 0 1-2.057.003L3.82 14.752a.694.694 0 0 1-.355-.659V9.998a.693.693 0 0 1 .345-.653l7.156-4.172a2.097 2.097 0 0 1 2.117.003l7.112 4.17a.693.693 0 0 1 .344.638z" />
    <Path d="M3.82 10.558a.699.699 0 0 1-.01-1.213l7.157-4.172a2.097 2.097 0 0 1 2.116.003l7.112 4.17a.699.699 0 0 1-.01 1.212l-7.132 4.023a2.096 2.096 0 0 1-2.056.003L3.82 10.558z" />
  </Svg>
);

export default SvgNodeHardware;
