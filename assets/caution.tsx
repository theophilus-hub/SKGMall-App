import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const CautionIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </Svg>
)
export default CautionIcon;