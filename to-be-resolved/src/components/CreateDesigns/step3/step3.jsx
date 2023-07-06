import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BrowseImage, Sidebar, WorkScreen } from '../../Dashboard'
import styles from "./style.module.css" 

const Step3 = () => {
  return (
    <Box component="section" className={styles.Dashboard_MAIN}>
      <Grid container>
        
        <Grid item lg={1} xs={1} md={1}> 
          <Sidebar />
        </Grid>

        <Grid item lg={3} xs={3} md={3}>
          <BrowseImage />
        </Grid>

        <Grid item lg={8} xs={8} md={8}>
          <WorkScreen />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Step3