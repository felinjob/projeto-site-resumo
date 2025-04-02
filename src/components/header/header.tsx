import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import { Logo } from '../logo';
import { Navigation } from '../navigation';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'background.paper', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 70 }}>
          <Box sx={{ mr: 2 }}>
            <Logo />
          </Box>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontWeight: 700,
              letterSpacing: '-1px',
              color: 'var(--color-text-primary)',
              flexGrow: 1,
            }}
          >
          </Typography>
          <Navigation />
          {/* Removed AuthNavigation */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;