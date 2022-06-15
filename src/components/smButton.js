import React from 'react'
import Button from '@mui/material/Button';
export default function SmButton(props) {
    const {label,variant,onClick, className} = props;


  return (
    <div>
          <Button variant={variant}  onClick={onClick} >{label}</Button>
    </div>
  )
}
