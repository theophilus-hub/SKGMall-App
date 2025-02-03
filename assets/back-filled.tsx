import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BackFilledIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Path
      fill="currentColor"
      d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256m212.65-91.36a16 16 0 0 1 .09 22.63L208.42 240H342a16 16 0 0 1 0 32H208.42l52.32 52.73A16 16 0 1 1 238 347.27l-79.39-80a16 16 0 0 1 0-22.54l79.39-80a16 16 0 0 1 22.65-.09"
    />
  </Svg>
)
export default BackFilledIcon;