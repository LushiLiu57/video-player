import {useState, useEffect} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Video from './Video'
import { fetchAPI } from '../helpers/fetchAPI'

function Feed() {

  const [currentCategory, setCurrentCategory] = useState('New')
  const [video,setVideo] = useState([])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${currentCategory}`).then((data) => setVideo(data.items))
  }, [currentCategory])
  
  return (
    <Stack sx={{flexDirection: {md:'row', sx:'column'}}}>

      {/* Side */}
      <Box sx={{height:{md:'92vh', sx:'auto'},borderRight: '2px solid #022', px:{md:2,sx:0}}}>
        <SideBar currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
        <Typography className='copyright' variant='body2' sx={{ mt:1.5}}>
          Copyright 2023
        </Typography>
      </Box>

      {/* Main */}
      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
        <Typography variant='h2' fontWeight='bold' mb={2}>
          {currentCategory} <span style={{color:'rgb(91, 170, 235)'}}>Videos</span>
        </Typography>
        <Video video={video}/>
      </Box>
    </Stack>
  )
}

export default Feed
