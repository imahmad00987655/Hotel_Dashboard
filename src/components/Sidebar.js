import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import {
  Dashboard,
  Hotel,
  People,
  CalendarToday,
  AttachMoney,
  Settings,
  ChevronLeft,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/' },
  { text: 'Rooms', icon: <Hotel />, path: '/rooms' },
  { text: 'Guests', icon: <People />, path: '/guests' },
  { text: 'Bookings', icon: <CalendarToday />, path: '/bookings' },
  { text: 'Revenue', icon: <AttachMoney />, path: '/revenue' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
];

const Sidebar = ({ open, onClose }) => {
  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Box sx={{ flexGrow: 1, pl: 2 }}>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            Hotel Dashboard
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <ChevronLeft sx={{ color: 'primary.main' }} />
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem
              button
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                borderRadius: 1,
                mx: 1,
                my: 0.5,
              }}
            >
              <ListItemIcon sx={{ color: 'primary.main' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color: 'text.primary',
                  '& .MuiTypography-root': {
                    fontWeight: 'medium',
                  },
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          © 2024 Hotel Management
        </Typography>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar; 