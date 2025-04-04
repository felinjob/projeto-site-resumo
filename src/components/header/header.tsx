// src/components/header/header.tsx
import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
// useTheme não é mais necessário
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';

const Header: FC = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Adicionado tipo de retorno : void
  const handleDrawerToggle = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const headerHeight = 64;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          height: `${headerHeight}px`,
          backgroundColor: 'background.paper', // Fundo branco/papel (ajuste se mudou)
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: `${headerHeight}px !important` }}>
            {/* Logo */}
            <Logo sx={{
                width: { xs: 120, md: 150 },
                '& .MuiTypography-root': { fontSize: { xs: '1rem', md: '1.25rem' }}
             }}/>
            {/* Navegação Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Navigation />
            </Box>
            {/* Botão Menu Mobile */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton aria-label="abrir menu" onClick={handleDrawerToggle} edge="end">
                <MenuIcon sx={{ color: 'text.primary' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, pt: 2 } }}
      >
        <Box sx={{ textAlign: 'right', pr: 1 }}>
          <IconButton onClick={handleDrawerToggle}> <CloseIcon /> </IconButton>
        </Box>
        <Box sx={{ px: 2 }} onClick={handleDrawerToggle}>
          <Navigation />
        </Box>
      </Drawer>

      {/* Toolbar Fantasma */}
      <Toolbar sx={{ minHeight: `${headerHeight}px !important` }}/>
    </Box>
  );
};

export default Header;