import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDevices = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M8.5 4A1.5 1.5 0 0 0 7 5.5v13A1.5 1.5 0 0 0 8.5 20h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 15.5 4h-7zm1.25 2a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5zM9 14.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0-.75.75zm4.75.75a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5h-.5z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgDevices;