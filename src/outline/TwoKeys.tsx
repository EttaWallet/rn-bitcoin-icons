import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Ellipse,
  Defs,
  ClipPath,
} from 'react-native-svg';

const SvgTwoKeys = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <G clipPath="url(#two-keys_svg__a)">
      <Path
        strokeLinecap="round"
        d="M14.257 5.976c-.85-1.7-2.832-2.638-4.802-2.147-2.27.566-3.663 2.815-3.112 5.023.157.633.458 1.194.86 1.659l-2.709 4.37a1.5 1.5 0 0 0-.18 1.153l.36 1.44a.25.25 0 0 0 .302.183l1.528-.381a1.5 1.5 0 0 0 .912-.666l2.884-4.655"
      />
      <Ellipse
        cx={10.82}
        cy={7.266}
        rx={1.059}
        ry={1.03}
        transform="rotate(-14 10.82 7.266)"
      />
      <Path d="M17.81 15.61c2.27-.566 3.664-2.815 3.113-5.023-.55-2.209-2.837-3.54-5.106-2.974-2.27.566-3.663 2.815-3.113 5.023.158.633.458 1.194.86 1.659l-2.708 4.37a1.5 1.5 0 0 0-.18 1.153l.359 1.44a.25.25 0 0 0 .303.183l1.527-.381a1.5 1.5 0 0 0 .912-.666l2.885-4.655c.378.008.763-.033 1.149-.129z" />
      <Ellipse
        cx={17.203}
        cy={10.984}
        rx={1.059}
        ry={1.03}
        transform="rotate(-14 17.203 10.984)"
      />
    </G>
    <Defs>
      <ClipPath id="two-keys_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgTwoKeys;
