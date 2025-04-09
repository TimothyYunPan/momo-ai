import SVG from 'react-inlinesvg'
import { Props as SVGProps } from 'react-inlinesvg'

export interface MomoSVGProps extends SVGProps {
  color?: string
  width?: string
  height?: string
  src: string
  className?: string
}

const MomoSVG = ({
  color,
  src,
  width,
  height,
  className,
  ...props
}: MomoSVGProps) => {
  const colorClass = color || 'black'
  const classes = ` ${colorClass} ${className || ''}`.trim()
  return (
    <div className={`w-[${width || '16px'}]`}>
      <SVG
        {...props}
        src={src}
        width={width || '16px'}
        height={height}
        // pointer={pointer ? 1 : 0}
        className={classes}
      />
    </div>
  )
}

export default MomoSVG
