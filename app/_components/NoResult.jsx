'use client';
import Image from "next/image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const NoResult = () => {
  return (
    <Box className="flex justify-center pt-11">
        <CardContent className="flex flex-col items-center bg-white rounded-lg shadow-md">
            <Image
                src="/jks.png"
                width={300}
                height={300}
            />
            <Typography variant="h1"
              className="text-voice123-600 font-extrabold text-lg mt-4"
            >
                No results found
            </Typography>
        </CardContent>
    </Box>
  );
};

export default NoResult;
