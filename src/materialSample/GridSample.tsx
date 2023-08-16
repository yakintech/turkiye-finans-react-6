import { Grid } from '@mui/material'
import React from 'react'

function GridSample() {
    return (<>
        <Grid container>
            <Grid item xs={2}>
                item-1
            </Grid>
            <Grid item xs={2}>
                item-2
            </Grid>
            <Grid item xs={2}>
                item-3
            </Grid>
            <Grid item xs={6}>
                item-4
            </Grid>
        </Grid>
    </>
    )
}

export default GridSample