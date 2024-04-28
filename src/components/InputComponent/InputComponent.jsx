import { Input } from 'antd'
import React from 'react'

const InputComponent = ({size, placeholder, bordered, style, ...rests}) => {
  return (
    <Input
            size= {size}
            //variant="borderless"
            bordered = {bordered} 
            placeholder={placeholder} 
            style={{backgroundColor: style, borderRadius: 0}} 
            {...rests}
        />
  )
}

export default InputComponent
