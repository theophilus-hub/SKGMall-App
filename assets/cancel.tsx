import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CancelIcon = (props: SvgProps) => {
    return (
        <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
            <Path fill="currentColor"
                d="m12 13.4 2.9 2.9q.275.275.7.275t.7-.275.275-.7-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7-.7-.275-.7.275L12 10.6 9.1 7.7q-.275-.275-.7-.275t-.7.275-.275.7.275.7l2.9 2.9-2.9 2.9q-.275.275-.275.7t.275.7.7.275.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9 2 12t.788-3.9 2.137-3.175T8.1 2.788 12 2t3.9.788 3.175 2.137T21.213 8.1 22 12t-.788 3.9-2.137 3.175-3.175 2.138T12 22" />
        </Svg>
    );
}

export default CancelIcon;
