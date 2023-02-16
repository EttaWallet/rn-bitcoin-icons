import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgTwoKeys = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M20.854 10.308c.6 2.411-.923 4.867-3.403 5.486-.31.077-.621.122-.928.137l-2.666 4.298a2 2 0 0 1-1.216.887l-1.236.308a1 1 0 0 1-1.212-.729l-.28-1.12a2 2 0 0 1 .241-1.538l2.445-3.943a4.38 4.38 0 0 1-.728-1.547c-.6-2.411.922-4.867 3.403-5.486 2.48-.618 4.978.835 5.58 3.247zm-3.872 1.48c.552-.137.89-.683.756-1.219-.133-.536-.688-.859-1.24-.721-.55.137-.89.683-.756 1.219s.69.859 1.24.721z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M11.251 12.187c2.48-.619 4.004-3.075 3.403-5.486-.601-2.412-3.1-3.865-5.58-3.247-2.48.618-4.004 3.075-3.402 5.486a4.36 4.36 0 0 0 .728 1.547l-2.445 3.942a2 2 0 0 0-.241 1.538l.28 1.121a1 1 0 0 0 1.211.728l1.236-.308a2 2 0 0 0 1.216-.886l2.666-4.298c.307-.015.618-.06.928-.137zm.288-5.225c.133.536-.205 1.082-.756 1.219s-1.106-.186-1.24-.721c-.134-.536.205-1.082.756-1.22.551-.137 1.106.186 1.24.722z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgTwoKeys;
