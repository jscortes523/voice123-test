'use client';

import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AudioPlayer from './AudioPlayer';
import ProfileSummary from './ProfileSummary';

const SearchResults = ({ results, keywords }) => {

  return (
    <main>
      <Box className="grid sm:grid-cols-1 md:grid-cols-2 py-4">
        {results.providers.map(sampleInfo => {
          return (
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px'}}
            className="m-2 rounded-lg shadow-md"
          >
            <AudioPlayer
              key={sampleInfo.relevant_sample}
              audioFileData={sampleInfo.relevant_sample}
            />
            <Stack direction="row" alignContent='center'>
              <Avatar alt="Remy Sharp" src={sampleInfo.user.picture_small} />
                <Link
                  variant="h6"
                  underline='hover'
                  component='a'
                  target="_blank"
                  rel="noreferrer"
                  href={`https://voice123.com/${sampleInfo.user.username}`}
                  className="p-2 truncate text-gray-800"
                >
                  {sampleInfo.user.name}
                </Link>
            </Stack>
            {keywords && (
              <ProfileSummary
                summary={sampleInfo.summary}
                additionalDetails={sampleInfo.additional_details}
                keywords={keywords}
              />
            )}
          </CardContent>
        )})
        }
      </Box>
    </main>
)
};

export default SearchResults;