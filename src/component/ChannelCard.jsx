import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../helpers/iconList'

function ChannelCard({channel}) {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:{xs:'350px', md:'320px'}, height:'320px', margin:'auto', borderRadius:'20px', boxShadow:'none'}}>
        <Link to={`/channel/${channel?.id?.channelId}`}>
            <CardContent sx={{display:'flex', judtifyContent:'center', textAlign:'center', flexDirection:'column'}}>
                <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channel?.snippet?.title} sx={{height:'150px', width:'150px', mb:2,borderRadius:'50%'}}/>
                <Typography variant='h5'>
                    {channel?.snippet?.title}
                </Typography>
                {channel?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard
