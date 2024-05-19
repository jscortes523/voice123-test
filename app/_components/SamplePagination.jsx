'use client';

import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

const SamplePagination = ( {totalPages, keywords, page}) => {
  const [currentPage, setCurrentPage] = useState(page);
  const router = useRouter();

  const handleOnChangePage = (event, value) => {
    setCurrentPage(value);
    const querySting = keywords ? `/?keywords=${keywords}&page=${value}` : `/?page=${value}`;
    router.push(querySting, undefined, { shallow: true });  
  };

  return (
    <Stack 
      spacing={2}
      alignItems='center'
    >
      <Pagination
        aria-current='page'
        shape='circular'
        color='primary'
        sx={{
          color: '#2196f3',
          borderRadius: '0.5em',
          backgroundColor: 'white',
          '& .Mui-selected': {
            backgroundColor: '#2196f3 !important', // or any specific color
            color: 'white !important',
            '&:hover': {
              backgroundColor: '#42a5f5 !important',
            },
          },
        }}
        count={totalPages}
        onChange={handleOnChangePage}
        page={currentPage}
      />
    </Stack>
  );
};

export default SamplePagination;
