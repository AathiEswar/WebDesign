import { forwardRef } from "react";

const HamMenuContents = forwardRef((props, ref) => {
  const { children, as, style, className, ...otherProps } = props;
  const Component = as || 'div';
  return (
    <Component ref={ref}>
      {
        children
      }
    </Component>
  )
})
HamMenuContents.displayName = 'HamMenuContents'
export default HamMenuContents;