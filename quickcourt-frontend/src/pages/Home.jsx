import { Box, Container, Typography, Paper } from '@mui/material';
import HeroCarousel from '../components/Carousel';
import QuickActions from '../components/QuickActions';
import SportGrid from '../components/SportGrid';

export default function Home() {
  const userName = 'User';

  return (
    <Box sx={{ bgcolor: '#f7f7f9', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'linear-gradient(90deg, #0ea5e9, #2563eb)',
            background: 'linear-gradient(90deg, #0ea5e9, #2563eb)',
            color: 'white',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: 3,
          }}
        >
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Welcome, {userName} 👋
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.95 }}>
            Find and book courts, clubs, and facilities instantly.
          </Typography>
        </Paper>

        <HeroCarousel />
        <QuickActions />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight={800} gutterBottom>
            Popular Sports
          </Typography>
          <SportGrid />
        </Box>
      </Container>
    </Box>
  );
}