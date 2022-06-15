import { Typography } from '@material-ui/core'
import React from 'react'
import Cards from '../../components/cards'

export default function Feedback() {
  return (
    <div className="home">
    <Typography variant='h3'>Customers Feedback</Typography>
    
    <div>
        <div style={{display:"flex", padding:"10px"}}>
        <div style={{padding:"10px"}}><Cards/></div>
        <div style={{padding:"10px"}}><Cards/></div>
        <div style={{padding:"10px"}}><Cards/></div>
        <div style={{padding:"10px"}}><Cards/></div>
        
        </div>
    </div>
    <div>
        <div style={{display:"flex", padding:"10px"}}>
        <div style={{padding:"10px"}}><Cards/></div>
        <div style={{padding:"10px"}}><Cards/></div>
        <div style={{padding:"10px"}}><Cards/></div>
        <div style={{padding:"10px"}}><Cards/></div>
        
        </div>
    </div>
    <div className="homeWidgets">
     
    </div>
  </div>
  )
}
