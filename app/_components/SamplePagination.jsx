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
        className=" bg-voice123-800 rounded-xl shadow-md mx-16"
        color="primary"
        count={totalPages}
        onChange={handleOnChangePage}
        page={currentPage}
      />
    </Stack>
  );
};

export default SamplePagination;
