import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { Link } from 'react-router-dom';
import RoutesString from 'src/routes/routesString';
import { useRef } from 'react';

const AccountListToolbar = ({ handleSearch }) => {
  const timeOut = useRef(null);
  const handleChange = (e) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      handleSearch(e.target.value);
    }, 500);
  };
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        {/* <Button>Import</Button>
        <Button sx={{ mx: 1 }}>Export</Button> */}
        <Link to={RoutesString.AccountCreate}>
          <Button color="primary" variant="contained">
            Thêm tài khoản
          </Button>
        </Link>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                onChange={handleChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search tài khoản"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AccountListToolbar;
