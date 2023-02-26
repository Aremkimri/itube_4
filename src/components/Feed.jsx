import { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from './';





const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState([]);

  useEffect(() =>{

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack 
      sx={{flexDirection: {xs: "column", md: "row"}}}>

      <Box 
        sx={{
          height: {sx: 'auto', md: '92vh'}, 
          borderRight: '1px solid red', 
          px: {xs: 0, md: 2} 
        }}>

        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box 
        p={2} 
        sx={{
          overflowY: 'auto', 
          height: '90vh', 
          flex: 2
        }}
      >
        <Typography 
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{color: 'red'}}
        >
          {selectedCategory} <span style={{color: '#468277'}}
          >videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed