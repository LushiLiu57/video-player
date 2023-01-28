import React from 'react'
import { Stack, Box } from '@mui/material'

import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Video = ({video, direction}) => {
    
  return (
    <Stack flexWrap='wrap' justifyContent='start' direction={direction || 'row'} gap={2}>
      {video.map((item, keyID) => (
        <Box key={keyID}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channel={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Video
