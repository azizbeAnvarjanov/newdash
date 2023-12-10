import { Helmet } from 'react-helmet-async';
// import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import {
  Grid,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
} from '@mui/material';
// import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TeamOverview from './TeamOverview';
// import TasksAnalytics from './TasksAnalytics';
import Performance from './Performance';
import Projects from './Projects';
// import Checklist from './Checklist';
import Profile from './Profile';
// import TaskSearch from './TaskSearch';


function DashboardTasks() {
  const theme = useTheme();



  return (
    <>
      <Helmet>
        <title>Tasks Dashboard</title>
      </Helmet>
      <Container maxWidth="lg" style={{ marginTop: 30 }}>
        <Card variant="outlined">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
              <>
       

                <Grid item xs={12}>
                  <Box p={4}>
                    <TeamOverview />
                  </Box>
                </Grid>
                
                <Grid item xs={12}>
                  <Divider />
                  <Box
                    p={4}
                    sx={{
                      background: `${theme.colors.alpha.black[5]}`
                    }}
                  >
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} md={8}>
                        <Profile />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Performance />
                      </Grid>
                    </Grid>

                  </Box>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <Box p={4}>
                    <Projects />
                  </Box>
                  <Divider />
                </Grid>
      
              </>
          </Grid>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardTasks;
