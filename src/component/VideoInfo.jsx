import { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Stack, Box } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReactPlayer from 'react-player'

import Video from './Video'
import { fetchAPI } from '../helpers/fetchAPI'

function VideoInfo() {
  const {id} = useParams()
  const [videoInfo, setVideoInfo] = useState(null)
  const[video, setVideo] = useState(null)

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoInfo(data.items[0]))
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideo(data.items))
  }, [id])

  if(!videoInfo?.snippet || !video) return (<div>Loading...</div>)
  const {snippet:{ title, channelId, channelTitle }, statistics:{ viewCount, likeCount } } = videoInfo;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{position:'sticky', top:'96px', width:'100%'}}>
            <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography variant='h5' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' px={2} py={1}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'h6', md:'h4'}} color='dodgerblue'>
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity:0.8}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.8}}>
                  {parseInt(likeCount).toLocaleString()} <ThumbUpIcon/>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box justifyContent='center' alignItems='center' px={2} py={{md:1, xs:5}}>
          <Video video={video} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoInfo
