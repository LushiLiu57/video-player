import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Nav from './component/Nav';
import Feed from './component/Feed';
import VideoInfo from './component/VideoInfo';
import ChannelInfo from './component/ChannelInfo';
import SearchFeed from './component/SearchFeed';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#d6d6d6'}}>
        <Nav/>
        <Routes>
          <Route path='/' exact element = {<Feed/>}/>
          <Route path='/video/:id'element = {<VideoInfo/>}/>
          <Route path='/channel/:id'element = {<ChannelInfo/>}/>
          <Route path='/search/:searchTerm'element = {<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
