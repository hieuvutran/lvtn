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
const HotelListToolbar = ({ handleSearch, isAdminRole }) => {
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
      {isAdminRole ? <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Link to={RoutesString.HotelCreate}>
          <Button color="primary" variant="contained">
            Thêm khách sạn
          </Button>
        </Link>
      </Box> : ''}
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
                placeholder="Search khách sạn"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HotelListToolbar;
