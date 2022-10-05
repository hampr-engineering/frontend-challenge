import { Box } from "@mui/material";


import type { FC } from "react";
import { Logo } from "../Logo/Logo";

export const Header: FC = () => (
  <Box component="header" sx={{
    width: '100%',
    height: '76px',
    backgroundColor: '#000',
    marginBottom: 8,
  }} >
    <Logo />
  </Box>
)
