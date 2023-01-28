import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Stack } from '@mui/material'

import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import SmartDisplayTwoToneIcon from '@mui/icons-material/SmartDisplayTwoTone';

function Nav() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Stack alignItems='center' direction='row' sx={{position:'sticky', background: 'rgb(91, 170, 235)', justifyContent:'space-between', top:0}} p={2}>
      <Link to='/' style={{alignItems:'center', display:'flex'}}>
        <SmartDisplayTwoToneIcon style={{fontSize:'4em'}}/>
      </Link>

      {/* SEARCH BAR */}
      <Paper component='form' onSubmit={handleSubmit} sx={{borderRadius:20, border: '1px solid #022', pl:2, boxShadow:'none', mr: {sm:5}}}>
        <input className='search-bar' placeholder='Search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <IconButton type='submit' sx={{color: 'dodgerblue', p:'8px'}}>
        <Search/>
      </IconButton>
      </Paper>
    </Stack>
  )
}

export default Nav
