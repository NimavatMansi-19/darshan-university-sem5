import { Card, CardActionArea, CardContent, Typography, Grid, Box } from '@mui/material';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import PlaceIcon from '@mui/icons-material/Place';

const actions = [
  { label: 'Find Venues', href: '/venues', icon: <PlaceIcon fontSize="large" color="primary" /> , description: 'Explore nearby courts and clubs' },
  { label: 'Browse Sports', href: '/sports', icon: <SportsTennisIcon fontSize="large" color="primary" />, description: 'See all sports you can book' },
];

export default function QuickActions() {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {actions.map((act) => (
          <Grid key={act.label} item xs={12} sm={6} md={6}>
            <Card variant="outlined" sx={{ borderRadius: 3 }}>
              <CardActionArea href={act.href}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {act.icon}
                    <Box>
                      <Typography variant="h6" fontWeight={700}>{act.label}</Typography>
                      <Typography variant="body2" color="text.secondary">{act.description}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}