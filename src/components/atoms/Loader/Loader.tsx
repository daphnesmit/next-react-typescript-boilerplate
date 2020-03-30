import { colors } from '@/theme/colors'

import { Box } from '../System'
interface LoaderProps {
  size?: number
  color?: string
}

export const Loader: React.FC<LoaderProps> = ({ size = 100, color = colors.primary }) => (
  <Box textAlign="center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid">
      <g transform="translate(25 50)">
        <circle r="6" fill={color} transform="scale(.54623)">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.3333333333333333s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(50 50)">
        <circle r="6" fill={color} transform="scale(.11097)">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.16666666666666666s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(75 50)">
        <circle r="6" fill={color} transform="scale(.0567)">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="0s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </Box>
)
