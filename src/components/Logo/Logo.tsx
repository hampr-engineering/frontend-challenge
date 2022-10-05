import { Box } from '@mui/material';
import { FC } from 'react';
import logo from '../../img/Mortal-Kombat-Logo.png';

export const Logo: FC = () => (
  <Box
    component="img"
    sx={{ height: '90px', marginTop: '32px' }}
    src={logo}
    alt="Mortal Kombat Logo"
  />
);
