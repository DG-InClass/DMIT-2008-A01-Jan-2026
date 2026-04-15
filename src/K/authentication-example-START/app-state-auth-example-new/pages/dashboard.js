import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography'

import Navbar from '@/components/Navbar'

import { useAuth } from '@/components/state/AuthProvider';

export default function Dashboard() {
  /* import the user reroute to home.
  This should be a protected page.
  */
  const { isAuthenticated, user } = useAuth({ protectedPage: true, redirectUrl: '/login/' });

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome {isAuthenticated && user.firstname }!
          </Typography>
          <Typography component="h2" variant="h5">
            This is your dashboard
          </Typography>
        </Box>
      </Container>
    </>
  )
}
