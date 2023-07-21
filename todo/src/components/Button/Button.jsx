import React from 'react'
import { Button } from 'primereact/button';

export default function CustomButton({ onClick, label }) {
  return (
   <Button onClick={onClick} label={label}/>
  )
}
