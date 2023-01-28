import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../helpers/iconList'

function VideoCard({video:{id:{videoId},snippet}}) {
    console.log(videoId, snippet)
  return (
    <Card sx={{width:{xs:'100%', sm:'360px', md:'320px'}, borderRadius:'none', boxShadow:'none'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:{xs:'100%', sm:'360px', md:'320px'}, height:180}}/>
        </Link>
        <CardContent sx={{height:'106px', backgroundColor: '#e1e1e1'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography>
                    {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' color='dodgerblue'>
                    {snippet?.channelTitle || demoChannelTitle}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard
