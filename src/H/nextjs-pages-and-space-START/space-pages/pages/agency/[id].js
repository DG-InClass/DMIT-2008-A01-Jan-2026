// ~/pages/agency/[id].js
//                \__/  "slug"

import {Container, Grid, Typography} from '@mui/material';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';

import { useRouter } from 'next/router';

// Notice that in the naming of my component, I call it Agency after the
// parent folder. That's because this "page" component is part of a
// Dynamic Route (where the value [id] is part of the route).
export default function Agency() {
    const router = useRouter();
    const { id } = router.query; // The "query" is the object that contains our "slug"

    return <>
        <NavBar />
        <Container sx={{paddingTop:2}}>
            <Grid container>
                <Grid item xs="2">
                    TBD
                </Grid>
                <Grid item xs="10">
                    <Typography variant="h3" gutterBottom>
                        Agency Page for {id}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </>
}
