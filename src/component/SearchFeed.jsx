import {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import Video from './Video'
import { fetchAPI } from '../helpers/fetchAPI'
import { useParams } from 'react-router-dom'

function SearchFeed() {
  const {searchTerm} = useParams()
  const [video,setVideo] = useState([])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideo(data.items))
  }, [searchTerm])
  
  return (
    <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight='bold' mb={2}>
         Search Result for <span style={{color:'rgb(91, 170, 235)'}}>{searchTerm}</span>
      </Typography>
      <Video video={video}/>
    </Box>
  )
}

export default SearchFeed
