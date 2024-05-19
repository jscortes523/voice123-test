'use client';

import { useState } from 'react';
import Image from "next/image";
import { AppBar, Toolbar, Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

const Header = ({ keywords }) => {
  const  [searchValue, setSearchValue] = useState(keywords);
  const router = useRouter();

  const handleTextChange = (e) => {
  setSearchValue(e.target.value);
  }

  const handleSearch = () => 
      router.push(`/?keywords=${searchValue}&page=1`, undefined, { shallow: true });

  const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
      handleSearch();
  }
  };

  return (
  <>
    <AppBar className="bg-white">
      <Toolbar className="flex justify-between h-[64px] px-5">
        <Box className="flex items-center mr-5">
          <Image src="/logo-voice123.png" width={95} height={28} alt="Logo" />
        </Box>

        <Box className="flex items-center w-1/2">
          <TextField
              variant="outlined"
              placeholder="Search"
              size="medium"
              className="flex-1 rounded-full border-[1px]"
              onChange={handleTextChange}
              onKeyDown={handleKeyPress}
              InputProps={{
              endAdornment: (
                  <InputAdornment className="-mr-[6px]">
                  <IconButton disableRipple onClick>
                      <SearchIcon className="h-[19px] w-[19px]" />
                  </IconButton>
                  </InputAdornment>
              ),
              }}
              inputProps={{ className: "text-[14px] ml-[10px]" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  </>
  );
};

export default Header;
