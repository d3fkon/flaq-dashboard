import React, { Children, LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
 
}

const Label = (props: LabelProps) => {
  const {children} = props;
  return (
    <label {...props} className="text-[#9999A5] text-sm font-semibold">{children}</label>
  )
}

export default Label