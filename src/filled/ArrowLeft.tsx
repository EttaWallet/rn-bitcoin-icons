import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgArrowLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M2.461 12a.75.75 0 0 1 .75-.75l17.79.012a.75.75 0 1 1-.002 1.5L3.21 12.75a.75.75 0 0 1-.749-.75z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M10.517 4.47a.75.75 0 0 1 .001 1.06L4.06 12l6.458 6.47a.75.75 0 0 1-1.061 1.06l-6.988-7a.75.75 0 0 1 0-1.06l6.988-7a.75.75 0 0 1 1.06 0z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgArrowLeft;
