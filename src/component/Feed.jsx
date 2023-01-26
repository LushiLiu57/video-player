import {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Video from './Video'
import { fetchAPI } from '../helpers/fetchAPI'

function Feed() {

  const [currentCategory, setCurrentCategory] = useState('New')

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${currentCategory}`)
  }, [])
  return (
    <Stack sx={{flexDirection: {md:'row', sx:'column'}}}>

      {/* Side */}
      <Box sx={{height:{md:'92vh', sx:'auto'},borderRight: '2px solid #022', px:{md:2,sx:0}}}>
        <SideBar/>
        <Typography className='copyright' variant='body2' sx={{ mt:1.5}}>
          Copyright 2023
        </Typography>
      </Box>

      {/* Main */}
      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
        <Typography variant='h2' fontWeight='bold' mb={2}>
          New <span style={{color:'rgb(91, 170, 235)'}}>Videos</span>
        </Typography>
        <Video/>
      </Box>
    </Stack>
  )
}

export default Feed
