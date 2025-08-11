import { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, Avatar, Typography, Grid, Box } from '@mui/material';
import ApiService from '../services/api';

export default function SportGrid() {
  const [sports, setSports] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    ApiService.fetchSports()
      .then((data) => {
        if (!isMounted) return;
        setSports(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err?.message || 'Failed to load sports');
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <Typography>Loading sports...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (sports.length === 0) {
    return <Typography>No sports found.</Typography>;
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {sports.map((sport) => (
          <Grid key={sport.sportId || sport.id} item xs={12} sm={6} md={4} lg={3}>
            <Card variant="outlined" sx={{ borderRadius: 3, height: '100%' }}>
              <CardActionArea href={`/sports/${sport.sportId || sport.id}`} sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      src={sport.iconUrl || ''}
                      alt={sport.name}
                      sx={{ width: 48, height: 48 }}
                    >
                      {(!sport.iconUrl && sport.name) ? sport.name[0] : null}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700}>{sport.name}</Typography>
                      {(sport.description || sport.type) && (
                        <Typography variant="body2" color="text.secondary">
                          {sport.description || sport.type}
                        </Typography>
                      )}
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