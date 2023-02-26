import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: {id: { videoId }, snippet }}) => {
  console.log(videoId, snippet);
  return (
    <Card sx={{width: {md: '310px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={`videoId ? /video/${videoId} : demoVideoUrl`}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{width: '100%', height: 180}}
        />
      </Link>

      <CardContent>
        
      </CardContent>
    </Card>
  )
}

export default VideoCard