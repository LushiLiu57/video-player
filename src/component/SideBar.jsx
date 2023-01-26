import { Category } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../helpers/iconList'

const currentCategory = 'New'

function SideBar() {
  return (
    <Stack direction='row' sx={{flexDirection:{md:'column'},overflowY:'auto',height:{md:'95%', sx:'auto'}}}>
      {categories.map((item) => (
        <button className='category-btn' key= {item.name} style={{background: item.name === currentCategory && 'rgb(91, 170, 235)'}}>
            <span style={{marginRight:'20px'}}>{item.icon}</span>
            <span >{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar
