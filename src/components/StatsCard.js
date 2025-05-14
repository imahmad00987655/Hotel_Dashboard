import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  background: `linear-gradient(135deg, ${color}40, ${color}20)`,
  border: `1px solid ${color}30`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at top right, ${color}20, transparent 70%)`,
    zIndex: 0,
  },
}));

const IconWrapper = styled(Box)(({ theme, color }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${color}, ${color}80)`,
  boxShadow: `0 4px 20px ${color}40`,
}));

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <StyledPaper color={color} elevation={3}>
        <IconWrapper color={color}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {icon}
          </motion.div>
        </IconWrapper>
        <Typography
          variant="h4"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          sx={{
            fontWeight: 'bold',
            color: color,
            textShadow: `0 2px 4px ${color}40`,
          }}
        >
          {value}
        </Typography>
        <Typography
          variant="subtitle1"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          sx={{ color: 'text.secondary', mt: 1 }}
        >
          {title}
        </Typography>
      </StyledPaper>
    </motion.div>
  );
};

export default StatsCard; 