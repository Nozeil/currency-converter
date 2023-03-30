import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <>
      <Header />
      <Container sx={{ height: '100%' }}>
        <Box component="main" sx={{ p: 3, height: '100%' }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
