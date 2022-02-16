import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


const Search = () => {

  return (
    <div>
      <SearchIcon>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </SearchIcon>
    </div>
  )
}

export default Search