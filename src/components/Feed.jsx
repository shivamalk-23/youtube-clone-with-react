import React, { useState,useEffect } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

import { fetchFromAPI } from '../utils/fetchfromAPI'

const Feed = () => {
const[videos,setvideos]=useState([])
  const[selectedCategory,setselectedCategory]=useState('New')

useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
.then((data)=>setvideos(data.items))
},[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}} }>
<Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>

<Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>

<Typography  className='copyright' variant="body2" sx={{mt:1.5,color:'#fff'}}>
  copyright 2024 M media
</Typography>
</Box>
<Box p={2} sx={{overflow:'auto',height:'90vh', flex:2}}>
  <Typography variant="h4" fontWeight="bold" mb={3} sx={{color:'white'}}>
    {selectedCategory}<span style={{color:'#F31503',padding:'5px'}}>videos</span>
  </Typography>
  <Videos videos={videos} />
</Box>
    </Stack>
  )
}

export default Feed
