import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFlipHorizontal = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M15.079 3.462a.75.75 0 0 1 1.06.016l3.399 3.5a.75.75 0 0 1 0 1.045l-3.398 3.5a.75.75 0 1 1-1.077-1.045l2.163-2.228H5a.75.75 0 1 1 0-1.5h12.226l-2.163-2.227a.75.75 0 0 1 .016-1.06zm-6.158 9a.75.75 0 0 1 .015 1.06L6.773 15.75H19a.75.75 0 0 1 0 1.5H6.774l2.162 2.227a.75.75 0 0 1-1.076 1.045l-3.398-3.5a.75.75 0 0 1 0-1.045l3.398-3.5a.75.75 0 0 1 1.06-.015z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgFlipHorizontal;
