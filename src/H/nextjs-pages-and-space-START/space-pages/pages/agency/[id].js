// ~/pages/agency/[id].js
//                \__/  "slug"

import { Container, Grid, Typography } from '@mui/material';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';

import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { getAgency } from '@utils/api/agencies';
import LoadingCircle from '@components/LoadingCircle';

// Notice that in the naming of my component, I call it Agency after the
// parent folder. That's because this "page" component is part of a
// Dynamic Route (where the value [id] is part of the route).
export default function Agency() {
    const [agencyDetails, setAgenciesDetails] = useState();
    const router = useRouter();
    const { id } = router.query; // The "query" is the object that contains our "slug"

    useEffect(() => {
        getAgency(id).then(data => setAgenciesDetails(data));
    }, [id]);

    return <>
        <NavBar />
        {
            !agencyDetails ? <LoadingCircle />
                :
                <Container sx={{ paddingTop: 2 }}>
                    <Grid container>
                        <Grid item xs="2">
                            <img
                                alt={agencyDetails.name}
                                src={agencyDetails.logo_url}
                                style={{ width: '120px' }}
                            />
                        </Grid>
                        <Grid item xs="10">
                            <Typography variant="h3" gutterBottom>
                                {agencyDetails.name} ({agencyDetails.abbrev})
                            </Typography>
                        </Grid>
                        <Grid item xs="4">
                            <Typography variant="h5">
                                Launch Details
                            </Typography>
                            <SimpleDetailsCard
                                title="Total Launches"
                                description={agencyDetails.total_launch_count}
                            />
                            <SimpleDetailsCard
                                title="Successful Launches"
                                description={agencyDetails.successful_launches}
                            />
                            <SimpleDetailsCard
                                title="Successful Landings"
                                description={agencyDetails.successful_landings}
                            />
                        </Grid>
                        <Grid item xs="4">
                            <Typography variant="h5">Agency Information</Typography>
                            <SimpleDetailsCard
                                title="Administrator"
                                description={agencyDetails.administrator}
                            />
                            <SimpleDetailsCard
                                title="Sapce Agency Details"
                                description={`Founded ${agencyDetails.founding_year}`}
                                subDescription={agencyDetails.description}
                            />
                        </Grid>
                        <Grid item xs="4">
                            <Typography variant="h5">
                                {`SpaceCraft`}
                            </Typography>
                            {agencyDetails.spacecraft_list && agencyDetails.spacecraft_list.map((spaceCraft) => {
                                return <SimpleDetailsCard
                                    key={spaceCraft.id}
                                    description={`${spaceCraft.name}`}
                                    buttonCallback={() => {
                                        router.push(`/spacecraft/${spaceCraft.id}`)  
                                        console.log("go to the space page")
                                    }}
                                    buttonName="Go to SpaceCraft"
                                />
                            })}
                        </Grid>
                    </Grid>
                </Container>
        }
    </>
}
