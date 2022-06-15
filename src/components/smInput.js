import React from 'react'
import TextField from '@mui/material/TextField';
export default function SmInput(props) {
    const {value,label,type,variant,onChange} = props
  return (
    <div>
       <TextField id="outlined-basic" autoComplete='off' value={value} type={type}  label={label} variant={variant} onChange={onChange} />
    </div>
  )
}
