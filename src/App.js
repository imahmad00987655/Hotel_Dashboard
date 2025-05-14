import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  Container,
} from '@mui/material';
import {
  BarChart,
  LineChart,
  DoughnutChart,
  DataTable,
  Header,
  StatsCard,
} from './components';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
});

const DashboardContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  background: 'linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardContainer>
        <Header />
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              {/* Stats Cards */}
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Total Bookings"
                  value="1,234"
                  icon="hotel"
                  color="#4caf50"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Occupancy Rate"
                  value="85%"
                  icon="bed"
                  color="#2196f3"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Revenue"
                  value="$45,678"
                  icon="attach_money"
                  color="#ff9800"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard
                  title="Average Rating"
                  value="4.5"
                  icon="star"
                  color="#e91e63"
                />
              </Grid>

              {/* Charts */}
              <Grid item xs={12} md={8}>
                <StyledPaper>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    Revenue Overview
                  </Typography>
                  <LineChart />
                </StyledPaper>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledPaper>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    Room Types Distribution
                  </Typography>
                  <DoughnutChart />
                </StyledPaper>
              </Grid>
              <Grid item xs={12}>
                <StyledPaper>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    Monthly Occupancy
                  </Typography>
                  <BarChart />
                </StyledPaper>
              </Grid>

              {/* Data Table */}
              <Grid item xs={12}>
                <StyledPaper>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    Recent Bookings
                  </Typography>
                  <DataTable />
                </StyledPaper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </DashboardContainer>
    </ThemeProvider>
  );
}

export default App; 