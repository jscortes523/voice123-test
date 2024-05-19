import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import CardMedia from '@mui/material/CardMedia';

import { useState, useRef } from 'react';

const AudioPlayer = ({ audioFileData }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const progressTime = 5;

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else { 
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (direction) => {
    if (direction === 'forward') {
      audioRef.current.currentTime += progressTime;
    } else {
      audioRef.current.currentTime -= progressTime;
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2}}>
      <IconButton aria-label="previuos" onClick={() => handleProgress('rewind')}>
        <FastRewindIcon
          sx={{ height: 30, width: 30 }}
          className="fill-voice123-400 rounded-md"
        />
      </IconButton>
      <IconButton aria-label="play/pause" onClick={() => handlePlayPause()}>
        { isPlaying ?
          (
            <PauseIcon
              sx={{ height: 38, width: 38 }}
              className="bg-voice123-400 rounded-full"
            />
          ) : (
            <PlayArrowIcon
              sx={{ height: 38, width: 38 }}
              className="bg-voice123-400 rounded-full"
            />
          )
        }
      </IconButton>
      <IconButton
        aria-label="next"
        onClick={() => handleProgress('forward')}
      >
        <FastForwardIcon
          sx={{ height: 30, width: 30 }}
          className="fill-voice123-400"
        />
      </IconButton>
      <CardMedia
        component="audio"
        src={audioFileData.file}
        ref={audioRef}
      />
    </Box>
  );
};

export default AudioPlayer;