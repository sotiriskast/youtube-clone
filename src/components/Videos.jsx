import React from 'react';
import {Stack, Box} from "@mui/material";
import {ChannelCard, VideoCard} from "./index";

const Videos = ({videos,direction}) => {
    return (
        <Stack direction={direction||'row'}
               flexWrap={'wrap'}
               justifyContent={'space-between'}
               gap={2}
               sx={{ml: '15px'}}


        >
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={{item}}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
