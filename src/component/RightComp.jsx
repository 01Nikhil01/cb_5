import React from 'react'
import { Avatar, Box, Card, Chip, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import chip from "../assets/chip.png"

function RightComp() {
  return (
    <>
       <Typography
        sx={{
          fontSize: "1.4rem",
          fontWeight: "700",
          letterSpacing: 0,
          mx:3,
          wordSpacing: 0,
          textTransform:"uppercase"
        }}
      >
        Recommended Jobs
      </Typography>
      <Typography
        sx={{
          
          fontSize: "1.2rem",
          ml:3,mr:8,
          color: "#959595",
          letterSpacing: 0,
          wordSpacing: 0,
        }}
      >
        Recommended Jobs for Retail Sales Associate in US
      </Typography>
      <Card sx={{display:"flex", alignItems:"flex-start", justifyContent:"space-between",gap:2,p:2,pb:4,my:3,ml:4,mr:8,boxShadow:"0 0 1px 1px #e7e7e7"}}>
      <Avatar sx={{borderRadius:"5px",bgcolor:"#f7edd0",border:"1px solid #f2f2f2",color:"#000",fontWeight:"700",fontSize:"1.5rem",p:2.8}}>L</Avatar>
      <Box>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between",pr:1}}>
        <Typography sx={{fontSize:".8rem",fontWeight:"700",color:"#707070"}}>4 DAYS AGO</Typography>
        <FavoriteBorderOutlinedIcon />
        </Box>
        <Typography sx={{color:"#2f4ba0",fontSize:"1.1rem",fontWeight:"700",letterSpacing:0}}>Route Sales Specialist li W...</Typography>
        <Typography sx={{color:"#707070",fontWeight:"600",mt:1,mr:1}}>Lepage Bakeries Park St , LIc |  ME  - Waldorobo | Full-Time</Typography>
      </Box>
      </Card>
      <Card sx={{display:"flex", alignItems:"flex-start", justifyContent:"flex-start",gap:2,p:2,pr:0,pb:2,my:3,ml:4,mr:8,boxShadow:"0 0 1px 1px #e7e7e7"}}>
      <Avatar sx={{borderRadius:"5px",bgcolor:"#f7edd0",color:"#000",border:"1px solid #f2f2f2",fontWeight:"700",fontSize:"1.5rem",p:2.8}}>D</Avatar>
      <Box>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center",gap:18,width:"100%"}}>
        <Typography sx={{fontSize:".8rem",fontWeight:"700",color:"#707070"}}>29 DAYS AGO</Typography>
        <FavoriteBorderOutlinedIcon />
        </Box>
        <Typography sx={{color:"#2f4ba0",fontSize:"1.1rem",fontWeight:"700",letterSpacing:0}}>Sales Trainer Entry Level +...</Typography>
        <Typography sx={{color:"#707070",fontWeight:"600",mt:1,mb:2,mr:1}}>DE - Wilmington | Full-Time</Typography>
        <Typography sx={{mb:1.5}}>$35,000 - $50,000/Year</Typography>
        <Chip label="Easy Apply"  sx={{height: "auto",color:"#000",bgcolor:"#aef4e7",fontSize:".8rem",
            borderRadius: "25px",
            px: 1,py:.5}} size="small"></Chip>
      </Box>
      </Card>
      <Card sx={{display:"flex", alignItems:"flex-start", justifyContent:"space-start",gap:2,p:2,pb:4,my:3,ml:4,mr:8,boxShadow:"0 0 1px 1px #e7e7e7"}}>
      <Avatar sx={{borderRadius:"5px",color:"#000",bgcolor:"inherit",border:"2px solid #f2f2f2",p:2.8}} src={chip} alt="avatar image"/>
      <Box>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between",pr:1}}>
        <Typography sx={{fontSize:".8rem",fontWeight:"700",color:"#707070"}}>TODAY</Typography>
        <FavoriteBorderOutlinedIcon />
        </Box>
        <Typography sx={{color:"#2f4ba0",fontSize:"1.1rem",fontWeight:"700",letterSpacing:0}}>Account Representative( I...</Typography>
        <Typography sx={{color:"#707070",fontWeight:"600",mt:1,mb:2,mr:1}}>Stand Up Management |  OH - Cleveland | Full-Time</Typography>
        <Typography sx={{mb:1.5}}>$37,000 - $48,000/Year</Typography>
        <Chip label="Easy Apply"  sx={{height: "auto",color:"#000",bgcolor:"#aef4e7",fontSize:".8rem",
            borderRadius: "25px",
            px: 1,py:.5}} size="small"></Chip>
      </Box>
      </Card>
    </>
  )
}

export default RightComp