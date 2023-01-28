import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Video from './Video'
import ChannelCard from './ChannelCard'
import { fetchAPI } from '../helpers/fetchAPI'

function ChannelInfo() {
  const {id} = useParams()

  const [channelInfo, setChannelInfo] = useState(null)
  const [video, setVideo] = useState([])

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelInfo(data?.items[0]))
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideo(data?.items))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'green', height:'300px', zIndex:10}}/>
        <ChannelCard channel={channelInfo} mt='-120px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm:'100px'}}} />
        <Video video={video}/>
      </Box>
    </Box>
  )
}

export default ChannelInfo
